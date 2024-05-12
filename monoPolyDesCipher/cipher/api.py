from cipher.models import Cipher
from rest_framework import viewsets, permissions
from .serializers import CipherSerializer

#Cipher ViewSet
class CipherViewSet(viewsets.ModelViewSet):
    queryset = Cipher.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CipherSerializer