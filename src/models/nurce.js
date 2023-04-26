const { Sequelize } = require('sequelize');
const connection = require('../database');

const Nurce = connection.define('nurces',{
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
  cofenuf_registation: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Nurce;