FROM debian:jessie

EXPOSE 9000

ENV NEWRELIC_VERSION 7.1.0.187
#newrelic install
RUN apt-get update
RUN mkdir -p /opt/newrelic/
WORKDIR /opt/newrelic
ADD https://download.newrelic.com/php_agent/release/newrelic-php5-${NEWRELIC_VERSION}-linux.tar.gz /opt/newrelic
WORKDIR /opt/newrelic
RUN tar -zxvf newrelic-php5-${NEWRELIC_VERSION}-linux.tar.gz
ENV NR_INSTALL_SILENT false
ENV NR_INSTALL_KEY 4c1e55bb23231d54055f7aedee86e37cc8966ebf
RUN mkdir -p /var/log/newrelic
RUN mkdir -p /var/run/newrelic

RUN apt-get install -y php5-fpm php5-mysql php5-mcrypt php5-gd php5-memcached php5-curl php5-xdebug php5-cli php5-intl php5-apcu supervisor

#php-fpm
RUN sed -i 's|listen = /var/run/php5-fpm.sock|listen = 0.0.0.0:9000|g' /etc/php5/fpm/pool.d/www.conf

# supervisor
RUN mkdir -p /var/log/supervisor
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

CMD ["/usr/bin/supervisord"]