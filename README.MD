# Berties Books

Sample code for Dynamic Web Applications module.

Uses node.js with Express and EJS.


# Bertie’s Books

A simple Node.js + Express + MySQL web app for **Bertie’s Books**, a small online bookstore.

---

## Features
- Express + EJS templating  
- MySQL database connection (via `mysql2`)  
- Routes for home, about, users, and books  
- Static files via `/public`  

---

##  Setup Instructions

###  1 Requirements
- Node.js (v18 or later)
- MySQL Server

### 2 Database Setup
Open MySQL and run:
```sql
SOURCE create_db.sql;
SOURCE insert_test_data.sql;


#### Install & Run
npm install
node index.js
Then open http://localhost:8000

## project structure

berties_books/
│
├── index.js
├── routes/
│ ├── main.js
│ ├── books.js
│ └── users.js
├── views/
│ ├── index.ejs
│ ├── about.ejs
│ ├── register.ejs
│ └── search.ejs
├── public/
│ └── main.css
├── create_db.sql
├── insert_test_data.sql
├── README.md
└── link.txt

## Main Routes

| Route             | Description       |
|-------------------|-------------------|
| `/`               | Home page         |
| `/about`          | About page        |
| `/books/list`     | List all books    |
| `/books/search`   | Search form       |
| `/users/register` | Registration form |


## Tech Stack
Node.js • Express • EJS • MySQL


## Author
Llewelyn Fernandes — educational project.