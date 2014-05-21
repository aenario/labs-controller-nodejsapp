FROM dockerfile/nodejs

# dont rebuild npm install for each version
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

ADD . /opt/app
RUN cd /opt/app; npm install --production

EXPOSE 9101
CMD cd /opt/app/; HOST=0.0.0.0 COUCH_HOST=$COUCH_PORT_5984_TCP_ADDR COUCH_PORT=$COUCH_PORT_5984_TCP_PORT npm start