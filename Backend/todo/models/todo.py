from django.db import models

class Todo (models.Model):
  description = models.TextField()
  created_at = models.DateTimeField(auto_now=True)
  todo_date = models.DateField()
  status = models.BooleanField(default=False)

  def __str__(self) -> str:
      return self.description

  class Meta:
    ordering = ['created_at']