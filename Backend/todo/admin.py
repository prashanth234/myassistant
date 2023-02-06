from django.contrib import admin

# Register your models here.

from .models.todo import Todo


admin.site.register(Todo)

