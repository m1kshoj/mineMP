from django.urls import path

from .views import *

urlpatterns = [
    path('', index, name='main'),
    path('donate/', donat, name='donate')
]