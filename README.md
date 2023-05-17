# noteTaker

This is the back-end server for an e-commerce application, which uses Object-Relational Mapping (ORM) to interact with a MySQL database. The server provides API routes for managing products, categories, and tags.

## My Task

Your task is to build the back end of an e-commerce site using Express.js, Sequelize, and a MySQL database. Modify the provided starter code to create an API that allows businesses to manage products, categories, and tags. Additionally, create a walkthrough video demonstrating the application's functionality and meeting all requirements.

## Technologies Used

- Node.js
- Express.js
- MySQL
- Sequelize ORM

## Link
https://drive.google.com/file/d/1I3NNFoekupZ29swn_Rl8CjalLt8XoJVF/view

## Installation

To install and run the server locally, follow these steps:

1. Run `npm install` to install the required dependencies.
2. Create a `.env` file in the root directory and provide the necessary environment variables (database connection details, etc.).
3. Run `npm run seed` to seed the database with sample data (optional).
4. Run `npm start` to start the server.

## Usage

Once the server is up and running, you can use a tool like Postman or Insomnia to interact with the API routes. The following routes are available:

- `GET /api/products`: Retrieves all products.
- `GET /api/products/:id`: Retrieves a specific product by ID.
- `POST /api/products`: Creates a new product.
- `PUT /api/products/:id`: Updates a specific product by ID.
- `DELETE /api/products/:id`: Deletes a specific product by ID.

Similar routes are available for categories and tags.

## Database

This server uses a MySQL database to store and retrieve data. The database schema and models are created using the Sequelize ORM. The database connection details can be configured in the `.env` file.


## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

## Contact

If you have any questions or suggestions, feel free to contact me at eenriquez2327@gmail.com . 