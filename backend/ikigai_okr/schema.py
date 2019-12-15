import graphene
import personal_okr.schema.Query
import personal_okr.schema.TagMuTation
import users.schema.Query


class Query(
        personal_okr.schema.Query,
        users.schema.Query,
        graphene.ObjectType):
    pass


class Mutation(
        personal_okr.schema.TagMuTation,
        graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
