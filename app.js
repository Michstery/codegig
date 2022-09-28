const express = require('express');
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');
const path = require("path");

// express app
const app = express();
// database
const db = require("./database");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));



// Test postgre DB
// db.authenticate()
//     .then(()=> console.log('Database Connected'))
//     .catch(err => console.log('Error : '+ err))
 const dbStart = async (db) => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      };
 }

 dbStart(db)


app.get('/', (req, res)=>{
    res.send('Index Page')
});
// Gigs route
app.use('/gigs', require("./routes/gigs"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started at port ${PORT}`));