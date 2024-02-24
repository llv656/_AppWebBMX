from statistics import mode
from django.db import models

class PeticionesUsuario(models.Model):
    ip = models.GenericIPAddressField(unique=True)
    intentos = models.IntegerField(default=1)
    timestamp = models.DateTimeField()
