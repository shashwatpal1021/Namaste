from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from .serializers import *
from rest_framework.response import Response

from .models import Project
# def hello(request):
#   return HttpResponse("This is the homepage")

class ProjectViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
   
    def list(self, request):
       querset = self.queryset
       serializer =self.serializer_class(querset, many=True)
       return Response(serializer.data)
    
    def create(self, request):
       serializers = self.serializer_class(data=request.data)

       if serializers.is_valid():
           serializers.save()
           return Response(serializers.data)

       return Response(serializers.errors,status=404)

    def retrieve(self, request,pk=None):
       project = self.queryset.get(pk=pk)
       serializers = self.serializer_class(project)
       return Response(serializers.data)
    
    def update(self, request, pk=None):
       project=self.queryset.get(pk=pk)
       serializers = self.serializer_class(project,data=request.data)

       if serializers.is_valid():
           serializers.save()
           return Response(serializers.data)

       return Response(serializers.errors,status=404)
    
    
    def destroy(self, request, pk=None):
       project=self.queryset.get(pk=pk)
       project.delete()
       return Response(status=204)
  