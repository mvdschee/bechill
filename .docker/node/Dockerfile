FROM phusion/baseimage:0.9.22

LABEL maintainer "m.v.d.schee@ewake.nl"

CMD ["/sbin/my_init"]

# Install core packages
RUN apt-get update -q
RUN apt-get upgrade -y -q
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y zip unzip git-core nano nodejs
RUN apt-get clean -q && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# setup workdir
WORKDIR /var/www/app

# Install cordova
RUN npm install -g cordova

# Install Ionic-cli
RUN npm install -g ionic

# Install Typescript
RUN npm install -g typescript

# # Install node_module and start server
# WORKDIR /root
# RUN mkdir -p /etc/my_init.d
# COPY bash.sh /etc/my_init.d/01_bash.sh
# RUN chmod +x /etc/my_init.d/01_bash.sh

# Expose configuration and content volumes
VOLUME /var/www/app

# Public ports
EXPOSE 8100
