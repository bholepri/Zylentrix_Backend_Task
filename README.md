# Zylentrix Backend Task

## Project Overview

This project is a backend task for Zylentrix, designed to manage user data with CRUD operations. It includes the implementation of various backend functionalities using modern technologies. The project provides endpoints to create, read, update, and delete user information stored in a MongoDB database.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/bholepri/Zylentrix_Backend_Task.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Zylentrix_Backend_Task
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   PORT=4000
   DB_CONNECT=your_mongodb_uri
   ```

### Running the Application

1. Start the server:
   ```sh
   npm start
   ```
2. The server will be running on `http://localhost:3000`.

## API Documentation

### Create a New User

- **URL:** `/users`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 30
  }
  ```
- **Success Response:**
  - **Code:** 201
  - **Content:**
    ```json
    {
      "statusCode": 201,
      "data": {
        "_id": "60c72b2f9b1d4c3a4c8e4b1a",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "age": 30,
        "__v": 0
      }
    }
    ```
- **Error Responses:**
  - **Code:** 400
  - **Content:**
    ```json
    {
      "statusCode": 400,
      "message": "All fields are required"
    }
    ```
  - **Code:** 500
  - **Content:**
    ```json
    {
      "statusCode": 500,
      "message": "Internal Server Error",
      "error": "Error message"
    }
    ```

### Get All Users

- **URL:** `/users`
- **Method:** `GET`
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "statusCode": 200,
      "data": [
        {
          "_id": "60c72b2f9b1d4c3a4c8e4b1a",
          "name": "John Doe",
          "email": "john.doe@example.com",
          "age": 30,
          "__v": 0
        }
      ]
    }
    ```
- **Error Responses:**
  - **Code:** 404
  - **Content:**
    ```json
    {
      "statusCode": 404,
      "message": "No users found"
    }
    ```
  - **Code:** 500
  - **Content:**
    ```json
    {
      "statusCode": 500,
      "message": "Internal Server Error",
      "error": "Error message"
    }
    ```

### Get a User by ID

- **URL:** `/users/:id`
- **Method:** `GET`
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "statusCode": 200,
      "data": {
        "_id": "60c72b2f9b1d4c3a4c8e4b1a",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "age": 30,
        "__v": 0
      }
    }
    ```
- **Error Responses:**
  - **Code:** 404
  - **Content:**
    ```json
    {
      "statusCode": 404,
      "message": "User not found"
    }
    ```
  - **Code:** 500
  - **Content:**
    ```json
    {
      "statusCode": 500,
      "message": "Internal Server Error",
      "error": "Error message"
    }
    ```

### Update a User by ID

- **URL:** `/users/:id`
- **Method:** `PUT`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 31
  }
  ```
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "statusCode": 200,
      "message": "User updated successfully",
      "data": {
        "_id": "60c72b2f9b1d4c3a4c8e4b1a",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "age": 31,
        "__v": 0
      }
    }
    ```
- **Error Responses:**
  - **Code:** 404
  - **Content:**
    ```json
    {
      "statusCode": 404,
      "message": "User not found"
    }
    ```
  - **Code:** 500
  - **Content:**
    ```json
    {
      "statusCode": 500,
      "message": "Internal Server Error",
      "error": "Error message"
    }
    ```

### Delete a User by ID

- **URL:** `/users/:id`
- **Method:** `DELETE`
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "statusCode": 200,
      "message": "User deleted successfully"
    }
    ```
- **Error Responses:**
  - **Code:** 404
  - **Content:**
    ```json
    {
      "statusCode": 404,
      "message": "User not found"
    }
    ```
  - **Code:** 500
  - **Content:**
    ```json
    {
      "statusCode": 500,
      "message": "Internal Server Error",
      "error": "Error message"
    }
    ```
