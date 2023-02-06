from django_filters.rest_framework import DjangoFilterBackend

from rest_framework.mixins import ListModelMixin, CreateModelMixin, DestroyModelMixin, UpdateModelMixin
from rest_framework.generics import ListCreateAPIView, DestroyAPIView, UpdateAPIView, GenericAPIView
from rest_framework.viewsets import GenericViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.filters import SearchFilter, OrderingFilter

from ..serializers.todoSerializer import TodoSerializer
from ..models.todo import Todo

class TodoViewSet (ListModelMixin, CreateModelMixin, UpdateModelMixin, DestroyModelMixin, GenericViewSet):
  filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
  filterset_fields = ['status']
  search_fields = ['description']
  ordering_fields = ['todo_date']
  queryset = Todo.objects.all()
  serializer_class = TodoSerializer



# class TodoView (APIView):
#   def get (self, request):
#     todos = Todo.objects.all()
#     serializer = TodoSerializer(todos, many=True)
#     return Response(serializer.data)
