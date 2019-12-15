from graphene import relay, ObjectType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
import graphene
from personal_okr.models import Tag, Objective, KeyResult


class TagNode(DjangoObjectType):
    class Meta:
        model = Tag
        filter_fields = ['name']
        interfaces = (relay.Node,)


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
