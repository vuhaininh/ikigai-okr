import graphene
import graphql_jwt
from personal_okr.schema import Query as pok_Query
from personal_okr.schema import Mutation as pok_Mutation
from users.schema import Query as users_Query
from users.schema import Mutation as users_Mutation


class Query(pok_Query, users_Query, graphene.ObjectType):
    pass


class Mutation(pok_Mutation, users_Mutation, graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
