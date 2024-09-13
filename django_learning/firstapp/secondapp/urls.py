from django.urls import path

from . import views

urlpatterns = [
    path("", views.all_chai, name="all_chai"),
    path("<int:id>/", views.chai_detail, name="chai_detail"),
]
