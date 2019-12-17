from graphene import relay, ObjectType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django_cud.mutations import DjangoCreateMutation
import graphene
from django.contrib.auth.hashers import make_password
from django.contrib.auth import get_user_model


class UserNode(DjangoObjectType):
    class Meta:
        model = get_user_model()
        filter_fields = ['first_name', 'last_name', 'email']
        interfaces = (relay.Node,)


class CreateUserMutation(DjangoCreateMutation):
    class Meta:
        model = get_user_model()
        required_firleds = ("email", "password")
        only_fields = ("email", "password", "first_name", "last_name")

    @classmethod
    def handle_password(cls, value, name, info):
        return make_password(value)


class Query(graphene.ObjectType):
    user = relay.Node.Field(UserNode)
    all_users = DjangoFilterConnectionField(UserNode)
    me = graphene.Field(UserNode)

    def resolve_me(self, info):
        user = info.context.user
        if user.is_anonymous:
            raise Exception('Not logged in!')
        return user


class Mutation(graphene.AbstractType):
    create_user = CreateUserMutation.Field()
