# Generated by Django 4.0.3 on 2022-03-12 04:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField()),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('todo_date', models.DateTimeField()),
                ('status', models.BooleanField(default=False)),
            ],
        ),
    ]
