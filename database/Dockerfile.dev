FROM postgres:13.3-alpine
COPY ./sql/*.sql /docker-entrypoint-initdb.d/
COPY ./sql/test/*.test.sql /docker-entrypoint-initdb.d/
ENV LANG es_ES.utf8