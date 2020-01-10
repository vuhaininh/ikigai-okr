from graphene import relay, ObjectType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django_cud.mutations import DjangoCreateMutation, DjangoPatchMutation, DjangoDeleteMutation
import graphene
from django.contrib.auth.hashers import make_password
from django.contrib.auth import get_user_model, authenticate
from graphql_jwt.shortcuts import get_token
from graphene_django.forms.mutation import DjangoModelFormMutation
from django.forms import ModelForm


class UserNode(DjangoObjectType):
    class Meta:
        model = get_user_model()
        filter_fields = ['id', 'first_name', 'last_name', 'email']
        interfaces = (relay.Node,)


class LoginForm(ModelForm):
    class Meta:
        model = get_user_model()
        fields = ('email', 'password')


class LogInMutation(DjangoModelFormMutation):
    token = graphene.String()
    user = graphene.Field(UserNode)

    class Meta:
        form_class = LoginForm

    @classmethod
    def mutate(cls, root, info, **input):
        user = authenticate(
            email=input['input']['email'], password=input['input']['password'])

        if user is None:
            # Please enter a correct email and password
            raise Exception('100')

        if not user.is_active:
            # It seems your account has been disabled
            raise Exception('101')
        return cls(user=user, token=get_token(user))


class LogOutMutation(graphene.Mutation):
    token = graphene.String()

    class Arguments:
        token = graphene.String()

    @classmethod
    def mutate(cls, root, info, token):

        return cls


class CreateUserMutation(DjangoCreateMutation):
    class Meta:
        model = get_user_model()
        required_firleds = ("email", "password")
        only_fields = ("email", "password", "first_name", "last_name")

    @classmethod
    def handle_password(cls, value, name, info):
        return make_password(value)


class PatchUserMutation(DjangoPatchMutation):
    class Meta:
        model = get_user_model()
        only_fields = ("email", "password", "first_name", "last_name")
        login_required = True

    @classmethod
    def handle_password(cls, value, name, info):
        return make_password(value)


class Query(graphene.ObjectType):
    user = relay.Node.Field(UserNode)
    all_users = DjangoFilterConnectionField(UserNode)
    me = graphene.Field(UserNode)

    def resolve_me(self, info):
        user = info.context.user
        if not user.is_authenticated:
            raise Exception('Authentication credentials were not provided')
        return user


class Mutation(graphene.AbstractType):
    create_user = CreateUserMutation.Field()
    patch_user = PatchUserMutation.Field()
    login = LogInMutation.Field()
    logout = LogOutMutation.Field()
