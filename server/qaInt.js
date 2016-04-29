var Sequelize = require('sequelize');

var orm = new Sequelize('qaInt', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

var Payments = orm.define('payments', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  user_id: Sequelize.INTEGER,
  merchant_id: Sequelize.INTEGER,
  employee_id: Sequelize.INTEGER,
  card_id: Sequelize.INTEGER,
  promotion_id: Sequelize.INTEGER,
  amount: Sequelize.FLOAT,
  fee: Sequelize.FLOAT,
  datetime: Sequelize.DATE,
  payee_id: Sequelize.INTEGER  
});

var Users = orm.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  email: Sequelize.STRING,
  date_created: Sequelize.DATE 
});


module.exports = {
  Payments: Payments,
  Users: Users
};

