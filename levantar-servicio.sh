#!/bin/bash

for var in $(cat settings_contenedor_front_end.env); do
    export "$var"
done

docker-compose up
