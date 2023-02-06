from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views.todoView import TodoViewSet

router = DefaultRouter()

router.register('tasks', TodoViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # path('tasks/', TodoViewSet.as_view())
]