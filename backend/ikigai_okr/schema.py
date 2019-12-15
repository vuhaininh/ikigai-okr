import graphene
from personal_okr.schema import Query as pok_Query


class Query(pok_Query, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)
