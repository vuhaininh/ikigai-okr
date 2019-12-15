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
    tag = graphene.Field(TagType,
                         id=graphene.Int(),
                         name=graphene.String())
    all_tags = graphene.List(TagType)
    objective = graphene.Field(ObjectiveType,
                               id=graphene.Int(),
                               description=graphene.String(),
                               finished_date=graphene.Date())
    all_objectives = graphene.List(ObjectiveType)
    key_result = graphene.Field(KeyResultType,
                                id=graphene.Int(),
                                description=graphene.Int(),
                                finished_date=graphene.Date())
    all_key_results = graphene.List(KeyResultType)

    def resolve_all_tags(self, info, **kwargs):
        return Tag.objects.all()

    def resolve_tag(self, info, **kwargs):
        id = kwargs.get('id')
        name = kwargs.get('name')
        if id is not None:
            return Tag.objects.get(pk=id)
        if name is not None:
            return Tag.objects.get(name=name)
        return None

    def resolve_all_objectives(self, info, **kwargs):
        return Objective.objects.all()

    def resolve_objective(self, info, **kwargs):
        id = kwargs.get('id')
        description = kwargs.get('description')
        finished_date = kwargs.get('finished_date')
        if id is not None:
            return Objective.objects.get(pk=id)
        if description is not None:
            return Objective.objects.get(description=description)
        if finished_date is not None:
            return Objective.objects.get(finished_date=finished_date)
        return None

    def resolve_all_key_results(self, info, **kwargs):
        return KeyResult.objects.select_related('objective').all()

    def resolve_key_result(self, info, **kwargs):
        id = kwargs.get('id')
        description = kwargs.get('description')
        finished_date = kwargs.get('finished_date')
        if id is not None:
            return KeyResult.objects.get(pk=id)
        if description is not None:
            return KeyResult.objects.get(description=description)
        if finished_date is not None:
            return KeyResult.objects.get(finished_date=finished_date)
        return None
