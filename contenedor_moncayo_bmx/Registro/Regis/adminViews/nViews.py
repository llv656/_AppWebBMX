from django.shortcuts import render
from django.template import RequestContext, loader,Template
from django.http import HttpResponse, JsonResponse
from django.shortcuts import redirect
import json
import re
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
from . import utils

def registro_personal(request):
    temp = 'RegistroPersonal/registro-personal.html'
    if request.method == 'GET':
        horarios_id_modal = [
            'formularioEmergenteLunes',
            'formularioEmergenteLunesComida',
            'formularioEmergenteMartes',
            'formularioEmergenteMartesComida',
            'formularioEmergenteMiercoles',
            'formularioEmergenteMiercolesComida',
            'formularioEmergenteJueves',
            'formularioEmergenteJuevesComida',
            'formularioEmergenteViernes',
            'formularioEmergenteViernesComida',
            'formularioEmergenteSabado',
            'formularioEmergenteSabadoComida',
            'formularioEmergenteDomingo',
            'formularioEmergenteDomingoComida'
        ]
        ip = ManejadorPeticiones.obtener_ip_cliente(request)
        return render (request,temp, {"elementos_id_modal":horarios_id_modal})
    elif  request.method == 'POST': 
            ip = ManejadorPeticiones.obtener_ip_cliente(request)
            if ManejadorPeticiones.puede_hacer_peticion(ip):
                usuario = request.POST['Nombre']
                apellidop = request.POST['ApellidoPaterno']
                apellidom = request.POST['ApellidoMaterno']
                telefono = request.POST['Telefono']
                email = request.POST['EmailUsuario']
                date = request.POST['fecha']
                direccion = request.POST['Direccion']
                contra = request.POST['PassU']
                contraC = request.POST['PassUs']
                if not usuario or not apellidop or not telefono or not email or not date or not direccion:
                    contexto = {'ERRORES': 'Llena los campos vacios'}
                    return render (request, temp, contexto)
                validar_nombre(usuario,request)
                validar_apellido(apellidop,request)
                if apellidom:
                    validar_apellido(apellidom,request)
                validar_telefono(telefono,request)
                validar_correo(email,request)
                validar_direccion(direccion,request)
                
                if validar_edad(date,request) == False:
                    contexto = {'ERRORES': 'Su edad es menor de 18 años'}
                    return render (request, temp, contexto)
                    
                if validar_password(contra,request) == False:
                    contexto = {'ERRORES': 'La contraseña es menor a 16 digitos, la contraseña debe incluir miniscula,mayusculas y numeros'}
                    return render (request, temp, contexto)

                if validar_password(contraC,request) == False:
                    contexto = {'ERRORES': 'La contraseña es menor a 16 digitos, la contraseña debe incluir miniscula,mayusculas y numeros'}
                    return render (request, temp, contexto)
                comprobar_password(contra,contraC,request)
                req = {
                "username": usuario, 
                "firstName": apellidop,
                "lastName": apellidom,
                "email":email,
                "password":contra,
                "phone":telefono,
                }
                objs = json.dumps(req)
                response = requests.post('https://petstore3.swagger.io/oauth/authorize', req)
                status_code = response.status_code
                if status_code == 200:
                    autenticacion(email,usuario,date,contra)
                return redirect("/Registro")
            else:
                contexto = {'ERRORES': 'Las solicitudes han sido excedidas'}
                return render (request, temp, contexto)

def actualizar_personal(request):
    tem = 'ActualizarPersonal/actualizar-personal.html'
    if request.method == 'GET':
        return render (request,tem)

def validar_usuario_personal(request, usuario):
    if  request.method == 'GET':
        headers = {
            "Content-Type":"application/json",
            "X_WEB_APP_ID":conf.WEB_APP_ID,
            "X_WEB_APP_KEY":conf.WEB_APP_KEY
        }
        
        response = requests.get(conf.API_GATEWAY_URL+'/BMX/gestionpersonal/validaciones/user?user='+usuario, headers=headers)

        status_code = response.status_code
        if status_code == 200:
            return response.json()
        else:
            return response.json()

def validar_contacto_personal(request, contacto):
    if  request.method == 'GET':
        headers = {
            "Content-Type":"application/json",
            "X_WEB_APP_ID":conf.WEB_APP_ID,
            "X_WEB_APP_KEY":conf.WEB_APP_KEY
        }
        
        response = requests.get(conf.API_GATEWAY_URL+'/BMX/gestionpersonal/validaciones/contacto?contacto='+contacto, headers=headers)
        
        status_code = response.status_code
        if status_code == 200:
            return JsonResponse(response.json())
        else:
            return JsonResponse(response.json())

def cita(request):
    temp = 'citas.html'
    if request.method == 'GET':
        ip = ManejadorPeticiones.obtener_ip_cliente(request)
        return render (request,temp)
    elif  request.method == 'POST': 
            ip = ManejadorPeticiones.obtener_ip_cliente(request)
            if ManejadorPeticiones.puede_hacer_peticion(ip):
                nombreC = request.POST['NombreCliente']
                telefono = request.POST['Telefono']
                barbero = request.POST['Barbero']
                servicio = request.POST['Servicio']
                fechac = request.POST['FechaCita']
                productos = request.POST['Productos']
                canal = request.POST['Canal']
                if not nombreC or not telefono or not barbero or not servicio or not fechac or not productos or not canal:
                    contexto = {'ERRORES': 'Llena los campos vacios'}
                    return render (request, temp, contexto)
                
                if validar_nombre(nombreC,request) == False:
                    contexto = {'ERRORES': 'El nombre del cliente tiene que ser mayor a 1 caracter y debe ser solo texto'}
                    return render (request, temp, contexto)
                
                if validar_telefono(telefono,request) == False:
                    contexto = {'ERRORES': 'El telefono tiene que ser de 10 digitos'}
                    return render (request, temp, contexto)
                
                if ManejadorPeticiones.validar_barbero_servicio_productos_canal(barbero,servicio,productos, canal, request) == False:
                    contexto = {'ERRORES': 'Todos los datos deben ser texto'}
                    return render (request, temp, contexto)
                
                return render (request, temp)
                

