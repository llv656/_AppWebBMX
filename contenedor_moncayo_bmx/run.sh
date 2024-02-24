#!/bin/bash
sleep 5 

su -c 'python3 -u manage.py makemigrations' limitado
su -c 'python3 -u manage.py migrate' limitado
su -c 'gunicorn --bind 0.0.0.0:8000 Registro.wsgi:application --reload' limitado
