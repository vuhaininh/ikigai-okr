from graphene import relay, ObjectType
from graphene_django import DjangoObjectType
from graphql_relay import from_global_id
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django_cud.mutations import DjangoCreateMutation, DjangoPatchMutation, DjangoDeleteMutation
import graphene
from personal_okr.models import Tag, Objective, KeyResult
from django.contrib.auth import get_user_model
from users.schema import UserNode


class TagNode(DjangoObjectType):
    class Meta:
        model = Tag
        filter_fields = ['name']
        interfaces = (relay.Node,)


class CreateTagMutation(DjangoCreateMutation):
    class Meta:
        model = Tag


class PatchTagMutation(DjangoPatchMutation):
    class Meta:
        model = Tag


class DeleteTagMutation(DjangoDeleteMutation):
    class Meta:
        model = Tag


class ObjectiveNode(DjangoObjectType):
    class Meta:
        model = Objective
        filter_fields = {
            'description': ['exact', 'icontains', 'istartswith'], }
        interfaces = (relay.Node,)


class CreateObjectiveMutation(DjangoCreateMutation):
    class Meta:
        model = Objective


class PatchObjectiveMutation(DjangoPatchMutation):
    class Meta:
        model = Objective


class DeleteObjectiveMutation(DjangoDeleteMutation):
    class Meta:
        model = Objective


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
    patch_tag = PatchTagMutation.Field()
    create_tag = CreateTagMutation.Field()
    delete_tag = DeleteTagMutation.Field()
