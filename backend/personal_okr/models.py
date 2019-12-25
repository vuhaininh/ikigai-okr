from django.db import models
from django.conf import settings


class Tag(models.Model):
    """Tag to be used for a objective"""
    name = models.CharField(max_length=255)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='tag',
        on_delete=models.CASCADE,
    )
    is_public = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class Objective(models.Model):
    """Objective of an OKR"""
    description = models.CharField(max_length=500)
    finished_date = models.DateField()
    deadline = models.DateField(default=None, null=True, blank=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='objectives',
        on_delete=models.CASCADE
    )
    tags = models.ManyToManyField(Tag)
    is_public = models.BooleanField(default=False)

    def __str__(self):
        return self.description


class KeyResult(models.Model):
    """Key Result of an Objective"""
    objective = models.ForeignKey(
        Objective, related_name='key_results', on_delete=models.CASCADE)
    description = models.CharField(max_length=500)
    finished_date = models.DateField()
    deadline = models.DateField(default=None, null=True, blank=True)
    is_public = models.BooleanField(default=False)

    def __str__(self):
        return self.description
