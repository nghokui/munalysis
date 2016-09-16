# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-09-16 20:08
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SpotifyAuth',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('auth_name', models.CharField(default='client', max_length=6)),
                ('auth_code', models.CharField(max_length=500)),
            ],
        ),
    ]
