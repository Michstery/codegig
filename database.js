const { Sequelize } = require('sequelize');
const pg = require('pg');

// // Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// // Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

// Option 3: Passing parameters separately (other dialects)
// module.exports = new Sequelize('codegig', 'postgres', 'ugoji', {
//     host: 'localhost',
//     dialect:  'postgres' 
//   });
  
// Option 1: Passing a connection URI
module.exports = new Sequelize('postgres://zyhcelub:hhvLqLKK0gT_NAv024DFR1YGmqTUbPT1@abul.db.elephantsql.com/zyhcelub') // Example for postgres
