FROM mongo
MAINTAINER maaydin

RUN mkdir /docker-entrypoint-updates-db.d
ADD updates/* /docker-entrypoint-updates-db.d/

ADD docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 27017
CMD ["mongod"]