from django.http import HttpResponse
from django.shortcuts import render


def home(request):
    # return HttpResponse("Hello, world. You're at the firstapp index.")
    return render(request, "website/index.html")


def about(request):
    return HttpResponse("Hello, about. You're at the firstapp index.")


def contact(request):
    return HttpResponse("Hello, contact. You're at the firstapp index.")
