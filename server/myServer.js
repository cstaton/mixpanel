// var express = require('express');
// var Sequelize = require('sequelize');
var db = require('./models');

// var MixpanelExport = require('mixpanel-data-export');
// var Mixpanel = require('mixpanel');
var Async = require('async');
// var db = require('./qaInt');

// var mixpanel = Mixpanel.init('12de1cd75ec56a6e5c5a4349389e7dd2');

// var panel = new MixpanelExport({
//   api_key: "7ad825d9852c26bbee21c20b4b83cff4",
//   api_secret: "4426b8ed3b852207ba715468c322c9ba"
// });


db.payments.findAll({
  where: {
    datetime: {
      gt: '2016-04-20 00:00:00'
    }
  }
}).then(function(result) {
    console.log("***************** TESTING *********************");
    // console.log(result);
    Async.each(result, function(item, index) {
      console.log('******** Payment #' + item.id + ' ***********');
      console.log(item.dataValues);
    });
    console.log("***********************************************")
  });


// var express = require('express');
// var app = express();

// app.use(express.static(__dirname + "/../client"));

// app.listen(80);




