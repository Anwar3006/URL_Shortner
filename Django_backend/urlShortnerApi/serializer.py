from rest_framework import serializers
from .models import URL
# Serialize data from Python object to JSON or XML


class URLSerializer(serializers.ModelSerializer):
    class Meta:
        model = URL
        fields = ('url',)
