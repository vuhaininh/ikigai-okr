import factory
from .models import User


class UserFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = User

    first_name = factory.Faker('first_name')
    last_name = factory.Faker('last_name')
    email = factory.Faker('ascii_free_email')
    password = factory.PostGenerationMethodCall('set_password',
                                                '123456')
