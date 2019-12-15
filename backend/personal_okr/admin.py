from django.contrib import admin
from personal_okr import models
# Register your models here.
admin.site.register(models.Tag)
admin.site.register(models.Objective)
admin.site.register(models.KeyResult)
