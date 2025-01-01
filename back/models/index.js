const Sequelize = require("sequelize");
const User1 = require("../models/user1");
const sequelize = require("../util/database.js");

module.exports = { sequelize, User1 };

User1.sync({force: true }) 
  .then(() => {
    console.log("The User1 table has been created ");
  })
  .catch((e) => {
    console.error(e);
  });

