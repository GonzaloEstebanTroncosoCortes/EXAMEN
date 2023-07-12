from django.contrib import admin
from .models import fotografia

# Register your models here.
class fotografiaAdmin(admin.ModelAdmin):
    list_display=("nombre","descripcion","archivo_fotografia","precio")

admin.site.register(fotografia, fotografiaAdmin)