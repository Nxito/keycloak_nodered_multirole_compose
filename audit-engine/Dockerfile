FROM nodered/node-red:1.3.5-12-minimal

# Agregar packetes mediante npm


# Copiar configuración de entorno

#WORKDIR /data
# COPY ./node-red/package.json .
# RUN npm install --unsafe-perm --no-update-notifier --no-fund --only=production
# RUN npm install --unsafe-perm --no-update-notifier --no-fund --only=production
COPY ./node-red/css /data/css
COPY ./node-red/settings.js /data/settings.js
# COPY ../audits /data/audits
COPY ./node-red/static /data/static
COPY ./node-red/flows.json /data/flows.json

# COPY ./package.json .

# Agregar packetes mediante npm
WORKDIR /usr/src/node-red

# RUN npm install @open-kappa/node-red-contrib-mydb@1.4.2
RUN npm i -force
# RUN npm install moment@2.29.1
# RUN npm install exceljs@4.2.1
# RUN npm install image-size@1.0.0
# RUN npm install webdav@4.7.0
USER root