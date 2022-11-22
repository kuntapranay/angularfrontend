FROM node:16.18

WORKDIR /app

COPY . /app/
RUN ls -la
RUN npm install 
RUN npm install -g @angular/cli

#RUN  npm start
#CMD ng config -g cli.warnings.versionMismatch false
ENTRYPOINT ["ng","serve","--host","0.0.0.0","--disable-host-check"]