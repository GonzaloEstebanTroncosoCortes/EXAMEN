from django.urls import path
from .views import index
from .views import formulario_1
from .views import Mapa
from .views import Galeria
from .views import nosotros
from .views import  ListaProducto
from .views import  agregarProducto
from .views import  agregarrec
from .views import  actualizarProducto
from .views import  actualizarrec
from .views import  eliminar
from .views import  exit
from .views import  register
from .views import CarritoWeb

from .views import  home

from .views import  agregar_producto
from .views import  eliminar_producto
from .views import  restar_producto
from .views import  limpiar_carrito


urlpatterns = [
    path('index.html', index, name='index' ),
    path('formulario_1.html', formulario_1, name='formulario_1' ),
    path('Mapa.html', Mapa, name='Mapa' ),
    path('Galeria.html', Galeria, name='Galeria' ),
    path('nosotros.html', nosotros, name='nosotros' ),
    
    path('ListaProducto.html', ListaProducto, name='ListaProducto'),
    path('agregarProducto.html', agregarProducto, name='agregarProducto'),
    path('agregarrec', agregarrec, name='agregarrec'),
    path('eliminar/<int:id>', eliminar, name='eliminar'),
    path('actualizarProducto/<int:id>', actualizarProducto, name='actualizarProducto'),
    path('actualizarrec/<int:id>', actualizarrec, name='actualizarrec'),
    #path('actualizarProducto/actualizarrec/<int:id>', actualizarrec, name='actualizarrec'),
    path('logout/',exit, name='exit'),
    path('register/',register, name='register'),
    path('',home, name='home'),
    path('CarritoWeb.html/',CarritoWeb, name='CarritoWeb'),
    
    path('agregar/<int:id>', agregar_producto, name="Add"),
    path('eliminar/<int:id>', eliminar_producto, name="Del"),
    path('restar/<int:id>', restar_producto, name="Sub"),
    path('limpiar/', limpiar_carrito, name="CLS"),
]