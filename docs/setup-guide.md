<!--Szczegółowe instrukcje dotyczące konfiguracji i uruchomienia aplikacji na lokalnym środowisku deweloperskim-->
# Setup Guide
# Date: 03/07/2024


## Table of Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Cloning the Repository](#cloning-the-repository)
4. [Setting Up the Frontend](#setting-up-the-frontend)
5. [Setting Up the Backend](#setting-up-the-backend)
6. [Setting Up the Database](#setting-up-the-database)
7. [Environment Variables](#environment-variables)
8. [Running the Application](#running-the-application)
9. [Running Tests](#running-tests)
10. [Troubleshooting](#troubleshooting)
11. [Conclusion](#conclusion)

## Introduction
This guide will walk you through the steps required to set up and run the application on your local development environment.

## Prerequisites
Before you begin, ensure you have the following software installed on your system:
- Git
- Node.js (version 14.x or higher)
- npm (version 6.x or higher)
- PostgreSQL (version 12 or higher)

## Cloning the Repository
Clone the repository to your local machine using the following command:
```bash
    git clone https://github.com/yourusername/yourrepository.git

Navigate to the project directory:
    cd yourrepository

Setting Up the Frontend
Navigate to the frontend directory and install dependencies:
    cd frontend
    npm install

Setting Up the Backend
Navigate to the backend directory and install dependencies:
    cd backend
    npm install

Setting Up the Database
    1. Ensure PostgreSQL is running on your machine.
    2. Create a new PostgreSQL database:
        createdb yourdatabase
    3. Apply database migrations (assuming you are using Sequelize):
        npx sequelize-cli db:migrate

Environment Variables
Create a .env file in the root of the backend directory and add the following variables:
    DATABASE_URL=postgres://username:password@localhost:5432/yourdatabase
    JWT_SECRET=your_jwt_secret
    PORT=5000
# Make sure to replace username, password, localhost, 5432, and yourdatabase with your actual database credentials and details.

Running the Application
First, start the backend server:
    cd backend
    npm start

Then, in a new terminal window, start the frontend development server:
    cd frontend
    npm start

The application should now be running. You can access it in your browser at http://localhost:3000.

Running Tests
To run tests for the frontend, navigate to the frontend directory and execute:
    npm test

To run tests for the backend, navigate to the backend directory and execute:
    npm test

Troubleshooting
Database Connection Issues: Ensure PostgreSQL is running and the credentials in your .env file are correct.
Port Conflicts: Make sure no other applications are running on ports 3000 (frontend) and 5000 (backend).

Conclusion
You should now have the application running locally. For any issues not covered in this guide, please refer to the project's documentation or contact the development team.