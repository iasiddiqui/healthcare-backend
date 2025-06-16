const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Doctor = sequelize.define('Doctor', {
  name: DataTypes.STRING,
  specialization: DataTypes.STRING,
});

module.exports = Doctor;
