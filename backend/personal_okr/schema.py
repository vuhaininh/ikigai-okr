from graphene import relay, ObjectType
from graphene_django import DjangoObjectType
from graphql_jwt.decorators import login_required
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
        login_required = True


class CreateTagMutation(DjangoCreateMutation):
    class Meta:
        model = Tag
        login_required = True


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


class CreateKeyResultMutation(DjangoCreateMutation):
    class Meta:
        model = KeyResult
        login_required = True


class PatchKeyResultMutation(DjangoPatchMutation):
    class Meta:
        model = KeyResult


class DeleteKeyResultMutation(DjangoDeleteMutation):
    class Meta:
        model = KeyResult


class Query(graphene.ObjectType):
    tag = relay.Node.Field(TagNode)
    tags = DjangoFilterConnectionField(TagNode)

    def resolve_all_tags(self, info, **kwargs):
        print(info.context.user)
        return Tag.objects.all()

    objective = relay.Node.Field(ObjectiveNode)
    objectives = DjangoFilterConnectionField(ObjectiveNode)

    key_result = relay.Node.Field(KeyResultNode)
    key_results = DjangoFilterConnectionField(KeyResultNode)


class Mutation(graphene.AbstractType):
    create_tag = CreateTagMutation.Field()
    patch_tag = PatchTagMutation.Field()
    delete_tag = DeleteTagMutation.Field()

    create_objective = CreateObjectiveMutation.Field()
    patch_objective = PatchObjectiveMutation.Field()
    delete_objective = DeleteObjectiveMutation.Field()

    create_keyresult = CreateKeyResultMutation.Field()
    patch_key_result = PatchKeyResultMutation.Field()
    delete_key_result = DeleteKeyResultMutation.Field()
