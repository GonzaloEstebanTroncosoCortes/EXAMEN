from django.db import models

# Create your models here.
class fotografia(models.Model):
    nombre=models.CharField(max_length=40)
    descripcion=models.CharField(max_length=40)
    archivo_fotografia=models.ImageField(upload_to='fotografia', null=True)
    precio = models.IntegerField()
    
    def __str__(self):
        return f'{self.nombre} -> {self.precio}'