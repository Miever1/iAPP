"""saimi URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from lovesystem.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login',login),
    path('signup',signup),
    path('logout',logout),
    path('index',index),
    path('reset',reset),
    path('blog',journal),
    path('createJournal',createJournal),
    path('editJournal', editJournal),
    path('deleteJournal', deleteJournal),
    path('calendar',calendar),
    path('createCalendar', createCalendar),
    path('editCalendar', editCalendar),
    path('deleteCalendar', deleteCalendar),
    path('tree',lovetree),
    path('createTree', createTree),
    path('editTree', editTree),
    path('deleteTree', deleteTree),
    path('addWater', addWater),
]
