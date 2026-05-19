# 🚀 Proyecto Innovatech Chile - Arquitectura de Microservicios y CI/CD

Este repositorio contiene la solución de infraestructura, contenedorización y despliegue automatizado para el proyecto "Innovatech Chile" (Evaluación Parcial N°2 - Introducción a Herramientas DevOps). 

El sistema está compuesto por una arquitectura de microservicios que incluye un Frontend en React y dos servicios Backend en Spring Boot, integrados a una base de datos MySQL, todo orquestado mediante Docker y automatizado con GitHub Actions hacia AWS EC2.

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