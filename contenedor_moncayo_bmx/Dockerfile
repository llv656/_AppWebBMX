FROM python:3.10.5

RUN mkdir /dependencias

COPY requeriments.txt /dependencias

RUN pip3 install -r /dependencias/requeriments.txt

ENV SECRET_KEY=""
ENV API_GATEWAY_URL=""
ENV WEB_APP_ID=""
ENV WEB_APP_KEY=""

RUN mkdir /code
RUN mkdir /start

COPY ./run.sh /start
RUN chmod 751 /start/run.sh

WORKDIR /code

RUN useradd -s /bin/bash limitado

RUN chown -R limitado /code 
RUN chown -R limitado /start 

CMD /start/run.sh
