const Sequelize = require("sequelize");
const sequelize = require("../util/database.js");

const User1 = sequelize.define("generic_table", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    number: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
    },
    status: {
        type: Sequelize.STRING,
        defaultValue: 'offline',
    },
    state: {
        type: Sequelize.STRING,
        defaultValue: null, 
    },
    city: {
        type: Sequelize.STRING,
        defaultValue: null, 
    },
},
{
    timestamps: false, 
  });

module.exports = User1;
