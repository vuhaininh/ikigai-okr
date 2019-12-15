from personal_okr.factories import TagFactory, ObjectiveFactory, KeyResultFactory
from users.factories import UserFactory
from personal_okr.models import Tag
import random


def create_sample_users():
    i = 1
    while i < 10:
        UserFactory()
        i += 1


def create_sample_tags():
    i = 1
    while i < 15:
        TagFactory()
        i += 1


def create_sample_objectives():
    i = 1
    tags = Tag.objects.all()
    total_tags = len(tags)
    while i < 15:
        number_of_tags = random.randint(3, 5)
        j = 0
        oTags = set()
        while j < number_of_tags:
            tag_index = random.randint(0, total_tags-1)
            oTags.add(tags[tag_index])
            j += 1
        ObjectiveFactory.create(tags=oTags)
        i += 1


def create_sample_key_results():
    i = 1
    while i < 15:
        KeyResultFactory()
        i += 1


def load_user_data():
    create_sample_users()


def load_tag_data():
    create_sample_tags()


def load_objective_data():
    create_sample_objectives()


def load_key_result_data():
    create_sample_key_results()
