FROM nodered/node-red:1.3.5-12

# Agregar packetes mediante npm


# Copiar configuración de entorno

#WORKDIR /data
# COPY ./node-red/package.json .
# RUN npm install --unsafe-perm --no-update-notifier --no-fund --only=production
# RUN npm install --unsafe-perm --no-update-notifier --no-fund --only=production
COPY ./node-red/css /data/css
COPY ./node-red/settings.js /data/settings.js
# COPY ./node-red/audits /data/audits
COPY ./node-red/static /data/static
COPY ./node-red/flows.json /data/flows.json

# COPY ./package.json .

# Agregar packetes mediante npm
WORKDIR /usr/src/node-red

RUN npm install @open-kappa/node-red-contrib-mydb@1.4.2
RUN npm install node-red-node-email@1.11.0
RUN npm install moment@2.29.1
RUN npm install pg@8.7.1
RUN npm install exceljs@4.2.1

USER root