FROM nodered/node-red:1.3.5-12

COPY ./node-red/css /data/css
COPY ./node-red/settings.js /data/settings.js
COPY ./node-red/static /data/static
COPY ./node-red/flows.json /data/flows.json

WORKDIR /usr/src/node-red

RUN npm install moment@2.29.1


USER root