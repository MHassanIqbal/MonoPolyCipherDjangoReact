from django.urls import path, include
from django.shortcuts import render

def index_view(request):
    return render(request, 'dist/index.html')

urlpatterns = [
    path('', index_view, name='index'),
    path('api', include('cipher.urls')),
]
