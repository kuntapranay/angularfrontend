#FROM node:16
FROM openjdk:11
WORKDIR /app/spring-backend
COPY ["/target/spring-backend-0.0.1-SNAPSHOT.jar" ,"/app/Spring-backend"]
#RUN apt update && npm install && npm install -g @angular/cli && ng version | ng v
EXPOSE 4200
CMD ["javar -jar spring-backend-0.0.1-SNAPSHOT.jar"]