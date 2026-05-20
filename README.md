# 🚀 Proyecto Innovatech Chile - Arquitectura de Microservicios y CI/CD

Este repositorio contiene la solución de infraestructura, contenedorización y despliegue automatizado para el proyecto "Innovatech Chile" (Evaluación Parcial N°2 - Introducción a Herramientas DevOps). 

El sistema está compuesto por una arquitectura de microservicios que incluye un Frontend en React y dos servicios Backend en Spring Boot, integrados a una base de datos MySQL, todo orquestado mediante Docker y automatizado con GitHub Actions hacia AWS EC2..

## 🏗️ Arquitectura del Sistema

El proyecto se divide en los siguientes componentes principales:
- **Frontend Despacho:** Interfaz de usuario construida con React y servida mediante Nginx optimizado (usuario no-root, puerto interno 8080).
- **Backend Despacho (API REST):** Microservicio en Spring Boot (puerto 8081).
- **Backend Ventas (API REST):** Microservicio en Spring Boot (puerto 8080).
- **Base de Datos:** MySQL 8.0 con persistencia de datos administrada y esquema auto-inicializado.

---

## 🛠️ Tecnologías Utilizadas

- **Desarrollo:** React (Vite), Java 17, Spring Boot, Maven.
- **Contenedorización:** Docker, Docker Compose (Multi-stage builds, mínimo privilegio).
- **CI/CD:** GitHub Actions, GitHub Secrets, Docker Hub.
- **Infraestructura Cloud:** AWS EC2, Security Groups, Redes Bridge.

---

## ⚙️ Despliegue Local (Entorno de Desarrollo)

Para levantar la infraestructura completa en un entorno local de manera orquestada, asegúrese de tener instalado **Docker** y **Docker Desktop/Engine**.

### Instrucciones de ejecución:

1. Clonar este repositorio:

    ```bash
    git clone <url-del-repositorio>
    cd Evaluacion-2---DevOps

2. Construir y levantar todo el stack de contenedores:

    ```bash
    docker compose up --build -d

Nota: El archivo docker-compose.yml centralizado se encargará de crear una red aislada (innovatech-net), levantar la base de datos con un Named Volume para persistencia, inyectar el script SQL de creación de esquemas (init-db), y levantar las APIs solo cuando la base de datos reporte un estado saludable (Healthcheck).

3. Accesos Locales:

    ° Frontend Web: http://localhost:80

    ° API Despachos: http://localhost:8081

    ° API Ventas: http://localhost:8080

    ° Base de Datos: localhost:3306

    Para detener y limpiar el entorno local:

    ```bash
    docker compose down


## 🔄 Integración y Despliegue Continuo (CI/CD)
Este proyecto implementa flujos de trabajo automatizados mediante GitHub Actions. Existen tres pipelines independientes para el Frontend y los Backends que garantizan la entrega continua.

Flujo de trabajo:

Trigger: Los pipelines se ejecutan de manera estricta al realizar un push o merge hacia la rama deploy.

Build & Push: Se construyen las imágenes Docker optimizadas y se publican automáticamente en el registro de Docker Hub.

Deploy EC2: Mediante una conexión SSH segura (utilizando llaves criptográficas almacenadas en GitHub Secrets), las instancias EC2 en AWS descargan la versión más reciente de la imagen y reinician los contenedores, garantizando el Zero Downtime y la continuidad operativa.


## ☁️ Infraestructura en AWS (Producción)
El entorno de producción simula una arquitectura empresarial segura:

Instancia Pública (Frontend): Expuesta a internet mediante IP elástica, sirviendo los archivos estáticos a los clientes.

Instancia Privada (Backends & DB): Restringida mediante Security Groups. Solo acepta peticiones provenientes del origen del Frontend, bloqueando cualquier acceso directo desde el exterior para proteger la lógica de negocio y la base de datos persistente.

## 👥 Autores

### Brayan Godoy

### Daniel Godoy
