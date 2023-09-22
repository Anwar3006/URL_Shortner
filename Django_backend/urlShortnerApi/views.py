from django.http import HttpResponseRedirect
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import URLSerializer
from .models import URL


# Create your views here.


class CreateReturnShortner(generics.ListCreateAPIView):
    serializer_class = URLSerializer

    def create(self, request):
        serializer = URLSerializer(
            data=request.data)
        if serializer.is_valid():
            instance = serializer.save()
            instance.url = f"{'http://localhost:8000/api/v1'}/{instance.pk}"
            return Response({'url': instance.url}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GotoLink(APIView):
    def get(self, request, pk):
        try:
            url_object = URL.objects.get(uuid=pk)
            return HttpResponseRedirect(url_object.url)
        except URL.DoesNotExist:
            return Response({"error": "URL not found"}, status=status.HTTP_400_BAD_REQUEST)
