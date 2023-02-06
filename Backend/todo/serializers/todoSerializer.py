from rest_framework import serializers
from ..models.todo import Todo

class TodoSerializer (serializers.ModelSerializer):
  class Meta:
    model = Todo
    fields = ['id', 'description', 'todo_date', 'status']
