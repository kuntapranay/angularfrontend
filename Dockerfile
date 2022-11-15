FROM node:16
WORKDIR /app/Angular-Frontend
COPY ["*.*" ,"/app/Angular-Frontend/"]
RUN apt update && npm install && npm install -g @angular/cli && ng version | ng v
EXPOSE 4200
CMD ["ng serve --host 0.0.0.0 --disable-host-check"]