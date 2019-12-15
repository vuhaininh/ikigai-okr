import factory
from .models import *
from users.models import User


class TagFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Tag

    name = factory.Faker('word')
    user = factory.Iterator(User.objects.all())


class ObjectiveFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Objective
    description = factory.Faker('text', max_nb_chars=50)
    finished_date = factory.Faker('date', pattern="%Y-%m-%d")
    user = factory.Iterator(User.objects.all())

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
    finished_date = factory.Faker('date', pattern="%Y-%m-%d")
    objective = factory.Iterator(Objective.objects.all())
