from rest_framework import serializers
from cipher.models import Cipher

#Cipher Serializer
class CipherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cipher
        fields = '__all__'