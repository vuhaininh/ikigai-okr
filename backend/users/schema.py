from graphene import relay, ObjectType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
import graphene

from users.models import User


class UserNode(DjangoObjectType):
    class Meta:
        model = User
        filter_fields = ['first_name', 'last_name', 'email']
        interfaces = (relay.Node,)


class CreateUserMutation(relay.ClientIDMutation):
    class Input:
        email = graphene.String()
        first_name = graphene.String()
        last_name = graphene.String()
        password = graphene.String()
    user = graphene.Field(UserNode)

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        user = User(
            email=input.get('email'),
            first_name=input.get('first_name'),
            last_name=input.get('last_name'),
        )
        user.set_password(input.get('password'))
        user.save()
        return CreateUserMutation(user=user)


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
