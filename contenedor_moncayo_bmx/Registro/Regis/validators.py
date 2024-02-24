from django.shortcuts import render
from django.template import RequestContext, loader,Template
from django.http import HttpResponse
from django.shortcuts import redirect
import re 
from datetime import datetime,date
from datetime import timezone
import datetime
from dateutil.relativedelta import relativedelta

def validar_nombre(usuario,request):
    temp = 'registro.html'
    if usuario.isalpha() and len(usuario) >=2 and len(usuario)<=130:
        pass
    else:
        contexto = {'ERRORES': 'El nombre tiene que ser mayor a 1 caracter'}
        return render (request, temp, contexto)
        
def validar_apellido(apellido,request):
    temp = 'registro.html'
    if apellido.isalpha() and len(apellido) >=2 and len(apellido)<=50:
        pass
    else:
        contexto = {'ERRORES': 'El apellido tiene que ser mayor a 1 caracter'}
        return render (request, temp, contexto)

def validar_telefono(telefono,request):
    temp = 'registro.html'
    if telefono.isdigit() and len(telefono)==10: 
        pass
    else:
        contexto = {'ERRORES': 'El telefono tiene que ser de 10 digitos'}
        return render (request, temp, contexto)
        
def validar_correo(email,request):
    temp = 'registro.html'
    if len(email) >=15 and len(email)<=241:
        regex = '^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'
        if(re.search(regex,email)):  
            body, domain = email.rsplit('@', 1)
            if len(body)>=3 and len(body)<=64 and len(domain)>=3 and len(domain)<=177:
                pass
            else:
                contexto = {'ERRORES': 'El correo es demasiado corto'}
                return render (request, temp, contexto)
        else:  
            contexto = {'ERRORES': 'El correo no cumple con los criterios'}
            return render (request, temp, contexto) 
    else:
        contexto = {'ERRORES': 'El correo es demasiado corto'}
        return render (request, temp, contexto)
        
def validar_edad(date,request):
    temp = 'registro.html'
    years = datetime.datetime.strptime(date,'%Y-%m-%d')
    years_str = years.strftime('%d-%m-%Y')
    now = datetime.datetime.now()
    edad = relativedelta(now, years)
    edad = edad.years
    if int(edad)<=18:
        return False
        
def validar_direccion(direccion,request):
    temp = 'registro.html'
    regex = r'^\w*$'
    if(re.match(r'[a-zA-Z0-9#\s]+$',direccion)):  
        pass
    else:
        contexto = {'ERRORES': 'Su dirección es invalida'}
        return render (request, temp, contexto)

def validar_password(value,request):
    tam_minimo = 16
    if len(value) < tam_minimo:
        return False
    if not any(val.isalpha() for val in value):
        return False
    if not any(val.islower() for val in value):
        return False
    if not any(val.isupper() for val in value):
        return False

def comprobar_password(contra,contraC,request):
    temp = 'registro.html'
    if contra  != contraC:
        contexto = {'ERRORES': 'Las contraseñas deben ser identicas'}
        return render (request, temp, contexto)

