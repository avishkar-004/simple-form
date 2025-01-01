const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const User1 = sequelize.define("generic_table", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  number: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: "offline",
  },
});

module.exports = User1;
