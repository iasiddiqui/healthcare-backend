const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Patient = sequelize.define('Patient', {
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
  condition: DataTypes.STRING,
});

User.hasMany(Patient);
Patient.belongsTo(User);

module.exports = Patient;
