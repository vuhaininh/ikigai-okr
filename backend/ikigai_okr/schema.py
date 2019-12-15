import graphene
from personal_okr.schema import Query as pok_Query
from users.schema import Query as users_Query


class Query(pok_Query, users_Query, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)
