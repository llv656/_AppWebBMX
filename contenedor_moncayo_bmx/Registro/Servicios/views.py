from django.shortcuts import render
from django.shortcuts import render
from django.template import RequestContext, loader,Template
from django.http import HttpResponse
from django.shortcuts import redirect
import json
import re
from django.shortcuts import render
from django.template import RequestContext, loader,Template
from django.http import HttpResponse
from django.shortcuts import redirect
import smtplib 
from datetime import datetime,date
from datetime import timezone
from Regis import models
import datetime
import Registro.settings as conf
import random
import string
from Regis.validators import *
from Regis.paso import * 
import json
import requests


# Create your views here.

# Create your views here.
def obtener_ip_cliente(request):
    """
    Esta funcion apoya la mitigacion de limites de intento de sesion, toma la ip de la solicitud
    """
    x_forwarded_for = request.META.get("HTTP_X_FORWARDED_FOR")
    if x_forwarded_for:
        ip = x_forwarded_for.split(",")[0]
    else:
        ip = request.META.get("REMOTE_ADDR")
    return ip

def ip_conocida(ip):
    """
    Revisamos si la dirección IP desde donde se trato de acceder al sistema ya se ha registrado previamente
     Return
         True si la dirección existe
    """
    registro_ip = models.PeticionesUsuario.objects.filter(ip=ip)
    return len(registro_ip) != 0


def guardar_peticion(ip, intentos):
    """
    Amacenamos las peticiones que se realicen al sistema, tomando su dirección IP y el número de intentos realizados
    si la IP no esta registrada, se almacena un 1 numero de intentos
    """
    fecha_actual = datetime.datetime.now()
    if not ip_conocida(ip):
        guardar_ip = models.PeticionesUsuario(ip=ip,
                                              intentos=1,
                                              timestamp=fecha_actual)
        guardar_ip.save()
        return
    registro = models.PeticionesUsuario.objects.get(ip=ip)
    registro.intentos = intentos
    registro.timestamp = fecha_actual
    registro.save()


def tiempo_limite(timestamp):
    """
    Realiza la validación del tiempo limite prestablecido en 1 en minuto
    * Return
     True, si el tiempo transcurrido es menor
     False, si el tiempo transcurrido es mayor
    """
    momento_actual = datetime.datetime.now(timezone.utc)
    resta = momento_actual - timestamp
    if resta.seconds < conf.VENTANA_SEGUNDOS_INTENTOS_PETICION:
        return True
    return False


def puede_hacer_peticion(ip):
    """
    Revisa si se pueden realizar peticiones desde una IP no conocida, de no ser conocida la almacena junto con el número de intento a ese momento, a su vez se compara el tiempo que a transcurrido desde que realizo la petición y almacena nuevamente el intento junto con la dirección IP.
    SI la IP ya es conocida unicamente almcena el nuevo intento realizado, verificando que este no exceda el preestablecido, de no ser así lo almacena.
    Return:
    * True, si la petición no es conocida aún
    * True, si la petición no excedio el tiempo limite de realizar peticiones
    //+++++++++++++++++++
    * False, si la petición ya es conocida y si ya excedio el número de intentos preestablecidos
    * True, Si la petición es conocida, pero aún no supera el número de intentos
    """
    if not ip_conocida(ip):
        guardar_peticion(ip, 1)
        return True
    registro = models.PeticionesUsuario.objects.get(ip=ip)
    if not tiempo_limite(registro.timestamp):
        guardar_peticion(ip, 1)
        return True
    else:
        if (registro.intentos + 1) > conf.INTENTOS_MAXIMOS_PETICION:
            guardar_peticion(ip, registro.intentos + 1)
            return False
        else:
            guardar_peticion(ip, registro.intentos + 1)
            return True


def registro_servicios(request):
    temp = 'RegistroServicios/registro-servicios.html'
    if request.method == 'GET':
        ip = obtener_ip_cliente(request)
        return render (request,temp)
    elif  request.method == 'POST': 
            ip = obtener_ip_cliente(request)
            if puede_hacer_peticion(ip):
                nombreS = request.POST['Nombre']
                descripcion = request.POST['Descripcion']
                tiempoH = request.POST['TiempoH']
                tiempoM = request.POST['TiempoM']
                costo = request.POST['Costo']
                if not nombreS or not descripcion or not tiempoH or not tiempoM or not costo:
                    contexto = {'ERRORES': 'Llena los campos vacios'}
                    return render (request, temp, contexto)
                
                if validar_servicio(nombreS,descripcion,request) == False:
                    contexto = {'ERRORES': 'El nombre y la descripción deben ser texto'}
                    return render (request, temp, contexto)
                
                if validar_tiempo_costo(tiempoH,tiempoM,costo, request) == False:
                    contexto = {'ERRORES': 'El tiempo y el costo debe ser numerico'}
                    return render (request, temp, contexto)
                tiempo=tiempoH+':'+tiempoM
                
                req = {
                "servicio": nombreS, 
                "descripcion": descripcion,
                "tiempo_servicio": tiempo,
                "precio":costo,
                
                }
                objs = json.dumps(req)
                response = requests.post('https://petstore3.swagger.io/oauth/authorize', req)
                status_code = response.status_code
                if status_code == 200:
                    pass
                return render (request, temp)
            else:
                contexto = {'ERRORES': 'Las solicitudes han sido excedidas'}
                return render (request, temp, contexto)

def actualizar_servicio(request):
    tem = 'ActualizarServicio/actualizar-servicio.html'
    if request.method == 'GET':
        hora = datetime.datetime.now(timezone.utc).strftime('%H:%M')
        data = {
            "nombre_servicio":"corte 1",
            "descripcion": "prueba de descripcion",
            "tiempo_servicio": hora,
            "precio_publico": "54",
            "precio_interno": "40",
            "imagenes_carrusel":None
        }
        return render (request,tem, data)