"""Registro URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from Regis.adminViews.nViews import *  #Aqui esta la vista de registro personal, no hice app 
from Clientes.views import *
from Productos.views import *
from Sucursal.views import *
from Servicios.views import *
from Citas.views import *


urlpatterns = [
    path('admin/', admin.site.urls),

    path('registro-clientes/', registro_cliente, name="registro-clientes"),
    path('actualizar-cliente/', actualizar_cliente, name="actualizar-cliente"),
    path('consulta-clientes/', consulta_clientes, name="consulta-clientes"),

    path('registro-personal/', registro_personal, name="registro-personal"),
    path('actualizar-personal/', actualizar_personal, name="actualizar-personal"),
    path('validar-usuario-personal/<str:usuario>/', validar_usuario_personal, name="validar-usuario-personal"),
    path('validar-contacto-personal/<str:contacto>/', validar_contacto_personal, name="validar-contacto-personal"),

    path('registro-producto/', registro_productos, name="registro-producto"),
    path('compra-producto/', compra_producto, name="compra-producto"),
    path('actualizar-producto/', actualizar_producto, name="actualizar-producto"),

    path('registro-servicios/', registro_servicios, name="registro-servicios"),
    path('actualizar-servicio/', actualizar_servicio, name="actualizar-servicio"),

    path('registro-cita/', registro_cita, name="registro-cita"),
    path('registro-cita-pantalla-1/', registro_cita_pantalla_1, name="registro-cita-pantalla-1"),
    path('registro-cita-pantalla-2/', registro_cita_pantalla_2, name="registro-cita-pantalla-2"),
    path('registro-cita-pantalla-3/', registro_cita_pantalla_3, name="registro-cita-pantalla-3"),
    path('registro-cita-pantalla-4/', registro_cita_pantalla_4, name="registro-cita-pantalla-4"),
    path('registro-cita-pantalla-clientes/', registro_cita_pantalla_clientes, name="registro-cita-pantalla-clientes"),
    path('consulta-citas/', consulta_citas, name="consulta-citas")
]