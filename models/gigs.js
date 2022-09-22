const { Sequelize, DataTypes } = require('sequelize');
const db = require("../database");

const User = db.define('gigs', {
  // Model attributes are defined here
  id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },  
  technologies: {
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
  },
  createdAt: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  updatedAt: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

module.exports = Gigs;