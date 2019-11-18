from django.shortcuts import render

# Create your views here.
from django.shortcuts import render


def my_view(request):
    return render(request,"./static/index.html")