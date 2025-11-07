FROM ubuntu:22.04
LABEL maintainer="zidane"

RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y nginx git && \
    rm -rf /var/lib/apt/lists/* /var/www/html/*

RUN git clone https://github.com/zidane2202/webapp1.git /var/www/html/

EXPOSE 80
ENTRYPOINT ["/usr/sbin/nginx", "-g", "daemon off;"]
