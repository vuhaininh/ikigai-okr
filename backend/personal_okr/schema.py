import graphene
from graphene_django.types import DjangoObjectType
from .models import Tag, KeyResult, Objective


class TagType(DjangoObjectType):
    class Meta:
        model = Tag


class ObjectiveType(DjangoObjectType):
    class Meta:
        model = Objective


class KeyResultType(DjangoObjectType):
    class Meta:
        model = KeyResult


class Query(object):
    all_tags = graphene.List(TagType)
    all_objectives = graphene.List(ObjectiveType)
    all_key_results = graphene.List(KeyResultType)

    def resolve_all_tags(self, info, **kwargs):
        return Tag.objects.all()

    def resolve_all_objectives(self, info, **kwargs):
        return Objective.objects.all()

    def resolve_all_key_results(self, info, **kwargs):
        return KeyResult.objects.select_related('objective').all()
