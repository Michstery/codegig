const express = require('express');
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');
const path = require("path");
const { Sequelize } = require('sequelize');

const app = express();



// // Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// // Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

// Option 3: Passing parameters separately (other dialects)
const db = new Sequelize('codegig', 'postgres', 'ugoji', {
  host: 'localhost',
  dialect:  'postgres' 
});
// Test postgre DB
db.authenticate()
    .then(()=> console.log('Database Connected'))
    .catch(err => console.log('Error : '+ err))
//  const dbStart = async (db) => {
//     try {
//         await db.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       };
//  }

//  dbStart(db)


app.get('/', (req, res)=>{
    res.send('Index Page')
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started at port ${PORT}`));