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


class Query(graphene.ObjectType):
    user = relay.Node.Field(UserNode)
    all_users = DjangoFilterConnectionField(UserNode)
