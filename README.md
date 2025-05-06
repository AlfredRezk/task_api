<p>Clarusway<img align="right"
  src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"  width="15px"></p>

# BE-01 : API for a Task Management System

## Description

You are tasked with building a RESTful API for a task management system using Express.js. This API will allow users to create, read, update, and delete tasks. It should also implement error handling and use middlewares for authentication and validation.

## Project Skeleton

```
project-folder/
│
├── index.js
├── routes/
│   ├── tasks.js
│
├── controllers/
│   ├── taskController.js
│
├── middleware/
│   ├── loggerMiddleware.js
│   ├── authMiddleware.js
│
├── data/
│   ├── dummyData.js
│
└── package.json
```

## Project Tasks

1. **Set Up Express.js Application (Basic)**:
   - Create a new Express.js application.
   - Implement a basic server that listens on a specified port.
2. **Create Routes and Define URL Endpoints**:
   - Create routes for the following URL endpoints:
     - `GET /tasks` to retrieve a list of tasks.
     - `GET /tasks/:id` to retrieve a single task by ID.
     - `POST /tasks` to create a new task.
     - `PUT /tasks/:id` to update an existing task.
     - `DELETE /tasks/:id` to delete a task by ID.
3. **Implement Middlewares**:
   - Create a middleware to log incoming requests with relevant information (e.g., request method, URL, and timestamp).
   - Implement error-handling middleware to catch and respond with proper error messages for invalid routes or other errors.
4. **Create Dummy Data and In-Memory Storage (Built-ins)**:
   - Implement an in-memory storage system to store tasks temporarily.
   - Create a few dummy tasks and populate the storage with them.
5. **Middleware for Authentication (Authentication)**:
   - Create a simple authentication middleware that checks for an API key in the request headers. If the API key exists, allow the request to proceed; otherwise, respond with an authentication error.
6. **Routing and Controller Logic**:
   - Implement the actual controller logic for each route. For example:
     - Retrieving a list of tasks (GET /tasks).
     - Retrieving a single task (GET /tasks/:id).
     - Creating a new task (POST /tasks).
     - Updating a task (PUT /tasks/:id).
     - Deleting a task (DELETE /tasks/:id).
   - Ensure proper validation and error handling within each controller.
7. **Testing**:
   - Test your API endpoints using tools like Postman.
   - Test various scenarios, including successful requests and error cases.
8. **Final Testing and Review**:
   - Ensure that the API works as expected in a production environment.
   - Review the codebase for any potential improvements, optimizations, or code quality enhancements.

## Notes

- This project task covers various aspects of backend development using Express.js, including routing, middleware usage, built-ins for error handling, and authentication, creating a fully functional API for a task management system.
- You can add additional functionalities to your app.

**<p align="center">&#9786; Happy Coding &#9997;</p>**
