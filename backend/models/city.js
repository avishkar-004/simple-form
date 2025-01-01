const Sequelize = require("sequelize");
const sequelize = require("../util/database.js");
const State = require('./state');

const City = sequelize.define('City', {
  cid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  stateId: {
    type: Sequelize.INTEGER,
    references: {
      model: State, 
      key: 'sid',
    },
  },
}, {
  tableName: 'cities',
  timestamps: false,
});

module.exports = City;
