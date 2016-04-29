"use strict";

module.exports = function(sequelize, DataTypes) {

  var Payments = sequelize.define('payments', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    user_id: DataTypes.INTEGER,
    merchant_id: DataTypes.INTEGER,
    employee_id: DataTypes.INTEGER,
    card_id: DataTypes.INTEGER,
    promotion_id: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    fee: DataTypes.FLOAT,
    datetime: DataTypes.DATE,
    payee_id: DataTypes.INTEGER  
  }, {
    classMethods: {
      // associate: function(models) {

      // }
    }
  });

  return Payments;
};

