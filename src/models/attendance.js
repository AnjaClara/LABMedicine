const { Sequelize } = require('sequelize');
const connection = require('../database');
const Patient = require('./patient');
const Doctor = require('./doctor');

const Attendance = connection.define('attendances',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  id_patient: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  id_doctor: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Attendance.belongsTo(Patient, {as: 'patient'});
Attendance.belongsTo(Doctor, {as: 'doctor'});

module.exports = Attendance;