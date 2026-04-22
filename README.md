# Mountain Trail Manager 

A microservices-based system for managing mountain trails. The application allows users to browse mountain peaks and their assigned trails, as well as manage them (add, edit, delete).

## Technology Stack
The project uses a modern tech stack ensuring scalability and separation of concerns:

* **Backend:** Java, Spring Boot, Spring Cloud.
* **Architecture:** Microservices (Service Discovery, API Gateway, Config Server).
* **Frontend:** Angular (SPA).
* **Databases:** PostgreSQL (separate databases for categories and elements).
* **Containerization:** Docker & Docker Compose.
* **Database Migration:** Flyway.

## System Architecture
The system consists of the following components:
* **Discovery Service:** Eureka Server for service registration.
* **Config Service:** Centralized configuration fetched from a Git repository.
* **API Gateway:** Single entry point to the system (port 8080).
* **Category Service:** Mountain management (port 8081).
* **Element Service:** Trail management (port 8082).
* **Angular App:** User Interface (port 4200).

## Getting Started

### Prerequisites
* **Docker** and **Docker Compose** installed on your machine.

### Running the application (Docker Compose)
The easiest way to start the entire ecosystem is by using Docker Compose, which automatically sets up the networks and databases:

1. Clone the repository.
2. Navigate to the root directory of the project and run the following command:
   ```bash
   docker-compose up --build
   ```
3. Once all services are up and running, the application will be available at: `http://localhost:4200`.
