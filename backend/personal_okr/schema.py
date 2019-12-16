from graphene import relay, ObjectType
from graphene_django import DjangoObjectType
from graphql_relay import from_global_id
from graphene_django.filter import DjangoFilterConnectionField
import graphene
from personal_okr.models import Tag, Objective, KeyResult


class TagNode(DjangoObjectType):
    class Meta:
        model = Tag
        filter_fields = ['name']
        interfaces = (relay.Node,)


class UpdateTagMutation(relay.ClientIDMutation):
    class Input:
        name = graphene.String(required=True)
        id = graphene.ID()
    tag = graphene.Field(TagNode)

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        tag = Tag.objects.get(pk=from_global_id(input.get('id'))[1])
        tag.name = input.get('name')
        tag.save()
        return UpdateTagMutation(tag=tag)


class CreateTagMutation(relay.ClientIDMutation):
    class Input:
        name = graphene.String()

    tag = graphene.Field(TagNode)

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        user = info.context.user or None
        tag = Tag(
            name=input.get('name'),
            user=user,
        )
        tag.save()
        return CreateTagMutation(tag=tag)


class DeleteTagMutation(relay.ClientIDMutation):
    class Input:
        id = graphene.ID()
    tag = graphene.Field(TagNode)

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        tag = Tag.objects.get(pk=from_global_id(input.get('id'))[1])
        tag.delete()
        return DeleteTagMutation(tag=tag)


class ObjectiveNode(DjangoObjectType):
    class Meta:
        model = Objective
        filter_fields = {
            'description': ['exact', 'icontains', 'istartswith'], }
        interfaces = (relay.Node,)


class KeyResultNode(DjangoObjectType):
    class Meta:
        model = KeyResult
        filter_fields = {
            'description': ['exact', 'icontains', 'istartswith'], }
        interfaces = (relay.Node,)


class Query(graphene.ObjectType):
    tag = relay.Node.Field(TagNode)
    all_tags = DjangoFilterConnectionField(TagNode)

    objective = relay.Node.Field(ObjectiveNode)
    all_objectives = DjangoFilterConnectionField(ObjectiveNode)

    key_result = relay.Node.Field(KeyResultNode)
    all_key_results = DjangoFilterConnectionField(KeyResultNode)


class Mutation(graphene.AbstractType):
    update_tag = UpdateTagMutation.Field()
    create_tag = CreateTagMutation.Field()
    delete_tag = DeleteTagMutation.Field()
