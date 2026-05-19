FROM maven:3.9-eclipse-temurin-17-alpine AS builder
WORKDIR /app
COPY pom.xml .
COPY src/ src/
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jre-alpine AS production
RUN apk update && apk upgrade --no-cache && rm -rf /var/cache/apk/*
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
RUN chown appuser:appgroup app.jar
USER appuser
EXPOSE 8081
ENV DB_ENDPOINT=localhost
ENV DB_PORT=3306
ENV DB_NAME=despachos_db
ENV DB_USERNAME=root
ENV DB_PASSWORD=password
ENTRYPOINT ["java", "-jar", "app.jar"]