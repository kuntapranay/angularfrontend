FROM node:16.18

WORKDIR /app

COPY . /app/
RUN ls -la
RUN npm install 
RUN npm install -g @angular/cli
RUN ng build
#WORKDIR /app/dist/angular-frontend
#RUN ls -la #dist/angular-frontend
EXPOSE 4200
ENTRYPOINT ["ng","serve","--host","0.0.0.0","--disable-host-check"]
