const Sequelize = require("sequelize");
const User1 = require("../models/user1");
const sequelize = require("../util/database.js");
const State = require('./state');
const City = require('./city');

State.hasMany(City, { foreignKey: 'stateId', onDelete: 'CASCADE' });
City.belongsTo(State, { foreignKey: 'stateId' });
module.exports = { State, City };

module.exports = { sequelize, User1 };

User1.sync({force: true }) 
  .then(() => {
    console.log("The User1 table has been created ");
  })
  .catch((e) => {
    console.error(e);
  });


//uncomment this part run once then again comment it 
  // sequelize
  // .sync()
  // .then(() => {
  //   return State.bulkCreate([
  //       { name : "Andhra Pradesh" },
  //       { name : "Arunachal Pradesh" },
  //       { name : "Assam" },
  //       { name : "Bihar" },
  //       { name : "Chhattisgarh" },
  //       { name : "Goa" },
  //       { name : "Gujarat" },
  //       { name : "Haryana" },
  //       { name : "Himachal Pradesh" },
  //       { name : "Jharkhand" },
  //       { name : "Karnataka" },
  //       { name : "Kerala" },
  //       { name : "Madhya Pradesh" },
  //       { name : "Maharashtra" },
  //       { name : "Manipur" },
  //       { name : "Meghalaya" },
  //       { name : "Mizoram" },
  //       { name : "Nagaland" },
  //       { name : "Odisha" },
  //       { name : "Punjab" },
  //       { name : "Rajasthan" },
  //       { name : "Sikkim" },
  //       { name : "Tamil Nadu" },
  //       { name : "Telangana" },
  //       { name : "Tripura" },
  //       { name : "Uttar Pradesh" },
  //       { name : "Uttarakhand" },
  //       { name : "West Bengal" },
  //   ]);
  // })
  // .then(() => {
  //   return City.bulkCreate([
  //     { name : "Visakhapatnam", stateId : 1 },
  // { name : "Vijayawada", stateId : 1 },
  // { name : "Guntur", stateId : 1 },
  // { name : "Nellore", stateId : 1 },

  // { name : "Itanagar", stateId : 2 },
  // { name : "Pasighat", stateId : 2 },
  // { name : "Tawang", stateId : 2 },
  // { name : "Ziro", stateId : 2 },

  // { name : "Guwahati", stateId : 3 },
  // { name : "Silchar", stateId : 3 },
  // { name : "Dibrugarh", stateId : 3 },
  // { name : "Tezpur", stateId : 3 },

  // { name : "Patna", stateId : 4 },
  // { name : "Gaya", stateId : 4 },
  // { name : "Bhagalpur", stateId : 4 },
  // { name : "Muzaffarpur", stateId : 4 },

  // { name : "Raipur", stateId : 5 },
  // { name : "Bilaspur", stateId : 5 },
  // { name : "Durg", stateId : 5 },
  // { name : "Korba", stateId : 5 },

  // { name : "Panaji", stateId : 6 },
  // { name : "Margao", stateId : 6 },
  // { name : "Mapusa", stateId : 6 },
  // { name : "Vasco da Gama", stateId : 6 },

  // { name : "Ahmedabad", stateId : 7 },
  // { name : "Surat", stateId : 7 },
  // { name : "Vadodara", stateId : 7 },
  // { name : "Rajkot", stateId : 7 },

  // { name : "Chandigarh", stateId : 8 },
  // { name : "Faridabad", stateId : 8 },
  // { name : "Gurgaon", stateId : 8 },
  // { name : "Panipat", stateId : 8 },

  // { name : "Shimla", stateId : 9 },
  // { name : "Manali", stateId : 9 },
  // { name : "Dharamshala", stateId : 9 },
  // { name : "Solan", stateId : 9 },

  // { name : "Ranchi", stateId : 10 },
  // { name : "Jamshedpur", stateId : 10 },
  // { name : "Dhanbad", stateId : 10 },
  // { name : "Bokaro", stateId : 10 },

  // { name : "Bengaluru", stateId : 11 },
  // { name : "Mysuru", stateId : 11 },
  // { name : "Mangaluru", stateId : 11 },
  // { name : "Hubballi", stateId : 11 },

  // { name : "Thiruvananthapuram", stateId : 12 },
  // { name : "Kochi", stateId : 12 },
  // { name : "Kozhikode", stateId : 12 },
  // { name : "Thrissur", stateId : 12 },

  // { name : "Bhopal", stateId : 13 },
  // { name : "Indore", stateId : 13 },
  // { name : "Gwalior", stateId : 13 },
  // { name : "Jabalpur", stateId : 13 },

  // { name : "Mumbai", stateId : 14 },
  // { name : "Pune", stateId : 14 },
  // { name : "Nagpur", stateId : 14 },
  // { name : "Nashik", stateId : 14 },

  // { name : "Imphal", stateId : 15 },
  // { name : "Churachandpur", stateId : 15 },
  // { name : "Thoubal", stateId : 15 },
  // { name : "Senapati", stateId : 15 },

  // { name : "Shillong", stateId : 16 },
  // { name : "Tura", stateId : 16 },
  // { name : "Jowai", stateId : 16 },
  // { name : "Nongpoh", stateId : 16 },

  // { name : "Aizawl", stateId : 17 },
  // { name : "Lunglei", stateId : 17 },
  // { name : "Champhai", stateId : 17 },
  // { name : "Serchhip", stateId : 17 },

  // { name : "Kohima", stateId : 18 },
  // { name : "Dimapur", stateId : 18 },
  // { name : "Mokokchung", stateId : 18 },
  // { name : "Wokha", stateId : 18 },

  // { name : "Bhubaneswar", stateId : 19 },
  // { name : "Cuttack", stateId : 19 },
  // { name : "Rourkela", stateId : 19 },
  // { name : "Puri", stateId : 19 },

  // { name : "Chandigarh", stateId : 20 },
  // { name : "Amritsar", stateId : 20 },
  // { name : "Ludhiana", stateId : 20 },
  // { name : "Jalandhar", stateId : 20 },

  // { name : "Jaipur", stateId : 21 },
  // { name : "Jodhpur", stateId : 21 },
  // { name : "Udaipur", stateId : 21 },
  // { name : "Kota", stateId : 21 },

  // { name : "Gangtok", stateId : 22 },
  // { name : "Namchi", stateId : 22 },
  // { name : "Pelling", stateId : 22 },
  // { name : "Ravangla", stateId : 22 },

  // { name : "Chennai", stateId : 23 },
  // { name : "Coimbatore", stateId : 23 },
  // { name : "Madurai", stateId : 23 },
  // { name : "Tiruchirappalli", stateId : 23 },

  // { name : "Hyderabad", stateId : 24 },
  // { name : "Warangal", stateId : 24 },
  // { name : "Nizamabad", stateId : 24 },
  // { name : "Karimnagar", stateId : 24 },

  // { name : "Agartala", stateId : 25 },
  // { name : "Udaipur", stateId : 25 },
  // { name : "Kailashahar", stateId : 25 },
  // { name : "Dharmanagar", stateId : 25 },

  // { name : "Lucknow", stateId : 26 },
  // { name : "Kanpur", stateId : 26 },
  // { name : "Varanasi", stateId : 26 },
  // { name : "Agra", stateId : 26 },

  // { name : "Dehradun", stateId : 27 },
  // { name : "Haridwar", stateId : 27 },
  // { name : "Nainital", stateId : 27 },
  // { name : "Rishikesh", stateId : 27 },

  // { name : "Kolkata", stateId : 28 },
  // { name : "Darjeeling", stateId : 28 },
  // { name : "Howrah", stateId : 28 },
  // { name : "Asansol", stateId : 28 }

  //   ]);
  // })
  // .then(() => {
  //   console.log("States and Cities have been inserted successfully.");
  // })
  // .catch((err) => {
  //   console.error("Error occurred:", err);
  // });
