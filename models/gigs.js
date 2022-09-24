const { Sequelize, DataTypes } = require('sequelize');
const db = require("../database");

const Gigs = db.define('gigs', {
  // Model attributes are defined here
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
console.log(Gigs === db.models.gigs); // true

module.exports = Gigs;