from django.shortcuts import render

from .models import ChaiVarity
from django.shortcuts import get_list_or_404


# Create your views here.
def all_chai(request):
    chais = ChaiVarity.objects.all()
    return render(request, "secondapp/all_chai.html", {"chais": chais})

def chai_detail(request, id):
    chai = get_list_or_404(ChaiVarity, pk=id)
    return render(request, "secondapp/details.html", {"chai": chai})