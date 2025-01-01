const Sequelize = require("sequelize");
const sequelize = require("../util/database.js");

const State = sequelize.define('State', {
    sid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'states',
    timestamps: false, 
  });
  
  module.exports = State;