# MongoDB CRUD Application

This is a simple CRUD (Create, Read, Update, Delete) application built using Node.js, Express, and MongoDB. The application allows you to manage a list of items, including creating, reading, updating, and deleting items.

## Installation

To install and run the application, follow these steps:

1.    Clone the repository: git clone https://github.com/aadityaagrawal/MongoDB_CRUD_APP.git
2.    Install dependencies: npm install
3.    Start the server: npm start
4.    Open the application in your browser: http://localhost:3000

### Usage

The application allows you to manage a list of items, including creating, reading, updating, and deleting items. Here are the available routes:

*    GET /books - Get a list of all items
*    GET /books/:id - Get a single item by ID
*    POST /books - Create a new item
*    PATCH /books/:id - Update an existing item by ID
*    DELETE /books/:id - Delete an item by ID

To use the application, simply make a request to the appropriate route using a tool like Postman or cURL. For example, to create a new item, you could make a POST request to http://localhost:3000/items with a JSON body like this:

```
{
  "title": "physics",
  "author": "HC Verma",
  "rating" : 10
}
```

### Dependencies

This application has the following dependencies:

    *express - A web framework for Node.js
    *mongodb - A driver for connecting to MongoDB
    *body-parser - A middleware for parsing request bodies

### Contributing

Contributions are welcome! If you find a bug or would like to add a new feature, please open an issue or submit a pull request.
