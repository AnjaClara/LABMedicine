const { Sequelize } = require('sequelize');
const connection = require('../database');

const Doctor = connection.define('doctors',{
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
  educational_institution: {
    type: Sequelize.STRING,
    allowNull: false
  },
  crmuf_registation: {
    type: Sequelize.STRING,
    allowNull: false
  },
  specialization: Sequelize.ENUM(
    "GENERAL_PRACTITIONE",
    "ANESTHETIST",
    "DERMATOLOGY",
    "GYNECOLOGY",
    "NEUROLOGY",
    "PEDIATRICS",
    "PSYCHIATRY",
    "ORTHOPEDICS",
  ),
  system_state: {
    type: Sequelize.ENUM("ACTIVE", "INACTIVE"),
    defaultValue: "ACTIVE"
  },
  total_appointments: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

module.exports = Doctor;