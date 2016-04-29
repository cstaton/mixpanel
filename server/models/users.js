"use strict";

module.exports = function(sequelize, DataTypes) {
  
  var Users = sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    date_created: DataTypes.DATE 
  }, {
    classMethods: {
      // associate: function(models) {

      // }
    }
  });

  return Users;
};

