# Generated by Django 4.0.3 on 2022-03-12 07:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='todo',
            options={'ordering': ['created_at']},
        ),
        migrations.AlterField(
            model_name='todo',
            name='todo_date',
            field=models.DateField(),
        ),
    ]
