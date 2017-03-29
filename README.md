# mongoose-crud

Demo app with basic mongoose CRUD.

### mongoose CRUD
List of book routes:

|    Route     |  HTTP  |         Description         |
| ------------ | ------ | --------------------------- |
| /books       | GET    | Get all books               |
| /books       | POST   | Create a book               |
| /books/:isbn | DELETE | Delete a book               |
| /books/:isbn | PUT    | Update a book with new info |

List of customer routes:

|        Route         |  HTTP  |    Description    |
| -------------------- | ------ | ----------------- |
| /customers           | GET    | Get all customers |
| /customers           | POST   | Create a customer |
| /customers/:memberid | DELETE | Delete a customer |
| /customers/:memberid | PUT    | Update a customer |

List of transaction routes:

|     Route     | HTTP |      Description      |
| ------------- | ---- | --------------------- |
| /transactions | GET  | Get all transactions  |
| /transactions | POST | Create a transactions |


### Usage
With only npm:

npm install

npm start

Access the website via http://localhost:3000/
