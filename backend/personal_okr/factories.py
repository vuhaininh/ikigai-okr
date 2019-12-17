import factory
from .models import *
from django.contrib.auth import get_user_model
from faker import Faker

fake = Faker()


class TagFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Tag

    name = factory.Faker('word')
    user = factory.Iterator(get_user_model().objects.all())


class ObjectiveFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Objective
    description = factory.Faker('text', max_nb_chars=50)
    finished_date = fake.date_between(
        start_date="+15d", end_date="+30d").strftime("%Y-%m-%d")
    deadline = fake.date_between(
        start_date="+35d", end_date="+45d").strftime("%Y-%m-%d")
    user = factory.Iterator(get_user_model().objects.all())

    @factory.post_generation
    def tags(self, create, extracted, **kwargs):
        if not create:
            # Simple build, do nothing.
            return

        if extracted:
            # A list of groups were passed in, use them
            for tag in extracted:
                self.tags.add(tag)


class KeyResultFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = KeyResult

    description = factory.Faker('text', max_nb_chars=50)
    finished_date = fake.date_between(
        start_date="+15d", end_date="+30d").strftime("%Y-%m-%d")
    deadline = fake.date_between(
        start_date="+35d", end_date="+45d").strftime("%Y-%m-%d")
    objective = factory.Iterator(Objective.objects.all())
