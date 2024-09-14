from rest_framework import serializers

from .models import *


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ("name", "start_date", "end_date", "comments", "created", "modified")

    name = models.CharField(unique=True, max_length=50)
    start_date = models.DateField()
    end_date = models.DateField()
    comments = models.CharField(max_length=500, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateField(auto_now=True)
