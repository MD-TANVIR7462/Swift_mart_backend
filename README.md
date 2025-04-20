# Swift Backend

## Overview

## Features

- **RESTful API**: Provides endpoints for CRUD operations on students, products, and user roles.
- **TypeScript**: Utilizes TypeScript for static typing and enhanced code readability.
- **MVC Architecture**: Implements the Model-View-Controller architecture pattern for better code organization.
- **MongoDB**: Stores data using a MongoDB database.

## Products Routes (`/api/product`)

- **POST /api/product**: Create a new product.
- **GET /api/product**: Retrieve a list of all products.
- **GET /api/product/{_Id}**: Retrieve details of a specific product by ID.
- **PUT /api/product/{_Id}**: Update an existing product.
- **DELETE /api/product/{_Id}**: Delete a product by ID.

### Interfaces For Creating Product
#### Properties:

- `name`: string - The name of the product.
- `description`: string - The description of the product.
- `price`: number - The price of the product.
- `quantity`: number - The quantity of the product.
- `category`: string - The category of the product.
- `imageUrl?: string` (optional) - The URL of the product's image.



## User Roles Routes (`/api/role`)

- **POST /api/role**: Create a new user role.
- **GET /api/role**: Retrieve a list of all user roles.
- **GET /api/role?role={admin/instructor/user}**: Retrieve users role with Query perameter for filtering with admin/instructor/user.
- **GET /api/role/{_Id}**: Retrieve details of a specific user role by ID.
- **PUT /api/role/{_Id}**: Update an existing user role.
- **DELETE /api/role/{_Id}**: Delete a user role by ID.

### Interfaces for creating User Role
#### Properties:

- `role`: "admin" | "user" - The role of the user.
- `name`: string - The name of the user.


## Setup

To get started with the project, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Set up your environment variables by creating a `.env` file in the root directory and defining the required variables.
4. Run the server using `npm run server`.
5. Access the API endpoints using the specified routes and methods.

## Contributors

- [MD.Tajul Islam Tanvir ]

