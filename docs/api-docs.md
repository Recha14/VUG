<!--Dokumentacja Endpointów API-->
# API Documentation
# Date: 03/07/2024


## BASE URL
The base URL for all API endpoints is:
https://api.example.com/v1

## AUTHENTICATION
All endpoints require an API key to be included in the request headers:
Authorization: Bearer YOUR_API_KEY


## ENDPOINTS

### 1. Get All Users
**Method HTTP:**
`GET`

**Path:**
**GET** `/users`

**Description:**
Retrieves a list of all users.

**Request Body:**
{
  "name": "John Doe",
  "email": "john.doe@example.com"
}

**Response:**
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com"
}

**Errors:**
`400 Bad Request`: Missing required fields or invalid data format.
`404 Not Found`: The user with the specified ID does not exist.


## CONTACT:
email: 14recha14@gmail.com