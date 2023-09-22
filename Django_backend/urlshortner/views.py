# from rest_framework.response import Response
from django.shortcuts import render


# Test view
def display(request):
    return render(request, 'html/hello.html', {})
