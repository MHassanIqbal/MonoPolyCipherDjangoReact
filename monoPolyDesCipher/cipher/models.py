from django.db import models

class Cipher(models.Model):
    plain_text = models.TextField()
    cipher_text = models.TextField()
    key = models.CharField(max_length=30)