const { Sequelize } = require('sequelize');
const connection = require('../database');

const Patient = connection.define('patients',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  full_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date_of_birth: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  phone_number: {
    type: Sequelize.STRING,
    allowNull: false
  },
  contact_emergency: {
    type: Sequelize.STRING,
    allowNull: false
  },
  list_of_allergies: {
    type: Sequelize.STRING
  },
  care_list: {
    type: Sequelize.STRING
  },
  health_insurance: {
    type: Sequelize.STRING
  },
  service_status: Sequelize.ENUM(
    "WAITING_FOR_SERVICE",
    "IN_ATTENDANCE",
    "ATTENDED",
    "NOT_ATTENDED"
  ),
  total_of_service: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

module.exports = Patient;