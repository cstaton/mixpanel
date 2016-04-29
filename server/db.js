var Sequelize = require('sequelize');

var db = new Sequelize('qaInt', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

db
  .authenticate()
  .then(function(error) {
    if (error) {
      console.log('Unable to connect to database: ', error);
    } else {
      console.log('Successfully connected to MySql database');
    }
  });

module.exports = db;
