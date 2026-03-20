# Login System Backend

This project is a backend implementation of a login system using Node.js and TypeScript. It provides authentication and user management functionalities, allowing users to register, log in, and manage their profiles.

## Features

- User registration and login
- JWT-based authentication
- User data retrieval and updating
- Error handling middleware
- Input validation utilities

## Project Structure

```
login-system-backend
├── src
│   ├── app.ts                  # Entry point of the application
│   ├── controllers             # Contains controllers for handling requests
│   │   ├── authController.ts   # Authentication logic
│   │   └── userController.ts   # User management logic
│   ├── routes                  # Defines application routes
│   │   ├── authRoutes.ts       # Authentication routes
│   │   └── userRoutes.ts       # User-related routes
│   ├── middleware              # Middleware functions
│   │   ├── authMiddleware.ts    # Authentication middleware
│   │   └── errorHandler.ts      # Error handling middleware
│   ├── models                  # Database models
│   │   └── User.ts             # User model
│   ├── database                # Database connection logic
│   │   └── connection.ts        # Database connection setup
│   ├── types                   # Type definitions
│   │   └── index.ts            # User and request/response types
│   └── utils                   # Utility functions
│       └── validators.ts        # Input validation functions
├── package.json                # NPM dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd login-system-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your database connection in `src/database/connection.ts`.

4. Start the application:
   ```
   npm start
   ```

## API Endpoints

- **Authentication**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Log in an existing user

- **User Management**
  - `GET /api/user/:id` - Get user data
  - `PUT /api/user/:id` - Update user information

## License

This project is licensed under the MIT License.