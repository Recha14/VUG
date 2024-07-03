<!--Szczegółowy opis architektury systemu, który ułatwi zrozumienie, jak aplikacja jest zbudowana, jak poszczególne komponenty współdziałają oraz jak można ją rozwijać i utrzymywać-->
# Architecture Overview
# Date: 03/07/2024


## Table of Contents
1. [Introduction](#introduction)
2. [High-Level Architecture](#high-level-architecture)
3. [Components](#components)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Database](#database)
4. [Data Flow](#data-flow)
5. [Technology Stack](#technology-stack)
6. [Deployment](#deployment)
7. [Security Considerations](#security-considerations)
8. [Scalability](#scalability)
9. [Conclusion](#conclusion)

## Introduction
This document provides an overview of the architecture of our web application. It covers the key components, their interactions, and the technologies used.

## High-Level Architecture
![High-Level Architecture Diagram](path/to/architecture-diagram.png)

The application is composed of three main layers:
- **Frontend**: The user interface of the application.
- **Backend**: The server-side logic and API.
- **Database**: The storage of application data.

## Components

### Frontend
The frontend is responsible for providing the user interface and interacting with the backend via API calls. It is built using:
- **Framework**: React
- **State Management**: Redux
- **Build Tool**: Webpack
- **Styling**: CSS-in-JS (Styled Components)

#### Key Features
- Single Page Application (SPA)
- Responsive Design
- Component-Based Architecture

### Backend
The backend handles the business logic, data processing, and API requests. It is built using:
- **Framework**: Express.js (Node.js)
- **Authentication**: JWT
- **ORM**: Sequelize (for database interactions)

#### Key Features
- RESTful API
- Authentication and Authorization
- Data Validation and Sanitization

### Database
The database stores all the persistent data for the application. It is designed with the following considerations:
- **Type**: Relational Database (PostgreSQL)
- **ORM**: Sequelize
- **Backup Strategy**: Daily automated backups

## Data Flow
The data flow within the application can be summarized as follows:
1. The user interacts with the frontend.
2. The frontend sends API requests to the backend.
3. The backend processes the requests and interacts with the database if necessary.
4. The backend sends responses back to the frontend.
5. The frontend updates the UI based on the responses.

## Technology Stack
- **Frontend**: React, Redux, Webpack, Styled Components
- **Backend**: Node.js, Express.js, Sequelize
- **Database**: PostgreSQL
- **Version Control**: Git
- **CI/CD**: GitHub Actions
- **Hosting**: AWS (EC2, RDS)

## Deployment
The deployment process involves the following steps:
1. Code is pushed to the main branch.
2. GitHub Actions triggers the CI pipeline.
3. Tests are run to ensure code quality.
4. The application is built and deployed to AWS.
5. The database migrations are applied.

## Security Considerations
- **Authentication**: JWT-based authentication.
- **Authorization**: Role-based access control (RBAC).
- **Data Encryption**: SSL/TLS for data in transit, AES-256 for data at rest.
- **Vulnerability Scanning**: Regular scans using tools like OWASP ZAP.

## Scalability
- **Frontend**: Can be served via CDN for faster load times.
- **Backend**: Can be scaled horizontally using load balancers.
- **Database**: Read replicas and partitioning to handle increased load.

## Conclusion
This document outlines the architecture of our web application, detailing its components, data flow, technology stack, and deployment process. This high-level overview serves as a reference for developers and stakeholders to understand the system's design and operational principles.
