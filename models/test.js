const { Sequelize, DataTypes } = require('sequelize');
const db = require("../database");

const Test = db.define('test', {
  // Model attributes are defined here
  username: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }, 
  budget: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },  
  description: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  contact_email: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(Test === db.models.test); // true

module.exports = Test;