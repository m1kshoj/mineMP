from django.http import HttpResponse
from django.shortcuts import render, redirect


def index(request):
    return render(request, 'mainapp/mainpage.html', {'title': 'MAIN PAGE'})


def forum(request):
    return HttpResponse('FORUM')


def donat(request):
    return render(request, 'mainapp/donation.html')
