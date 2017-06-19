FROM wnameless/oracle-xe-11g
#ADD init.sql /docker-entrypoint-initdb.d/

ADD startup.sh /usr/sbin/startup.sh
RUN chmod +x /usr/sbin/startup.sh
CMD /usr/sbin/startup.sh && /usr/sbin/sshd -D
