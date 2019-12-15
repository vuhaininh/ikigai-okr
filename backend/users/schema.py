import graphene
from graphene_django.types import DjangoObjectType
from .models import User


class UserType(DjangoObjectType):
    class Meta:
        model = User


class Query(object):
    all_users = graphene.List(UserType)
    user = graphene.Field(UserType,
                          id=graphene.Int(),
                          first_name=graphene.String(),
                          last_name=graphene.String(),
                          email=graphene.String(),
                          )

    def resolve_all_users(self, info, **kwargs):
        return User.objects.all()

    def resolve_user(self, info, **kwargs):
        id = kwargs.get('id')
        first_name = kwargs.get('first_name')
        last_name = kwargs.get('last_name')
        email = kwargs.get('email')
        if id is not None:
            return User.objects.get(pk=id)
        if first_name is not None:
            return User.objects.get(first_name=first_name)
        if last_name is not None:
            return User.objects.get(last_name=last_name)
        if email is not None:
            return User.objects.get(email=email)
        return None
