from django.shortcuts import render

# Create your views here.
from django.shortcuts import render


def login(request):
    return render(request,"login.html")

def signup(request):
    return render(request,"signup.html")

def index(request):
    return render(request,"index.html")

def reset(request):
    return render(request,"reset.html")

def journal(request):
    return render(request,"journal.html")

def createJournal(request):
    return render(request,"createJournal.html")

def calendar(request):
    return render(request,"calendar.html")

