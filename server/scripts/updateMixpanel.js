var db = require('../db');
var Payments = require('../models/payments');
var Users = require('../models/users');

var mixpanel = Mixpanel.init('12de1cd75ec56a6e5c5a4349389e7dd2');


// db.payments.findAll({
//   where: {
//     datetime: {
//       gt: '2016-04-20 00:00:00'
//     }
//   }
// }).then(function(result) {
//     console.log("***************** TESTING *********************");
//     // console.log(result);
//     Async.each(result, function(item, index) {
//       console.log('******** Payment #' + item.id + ' ***********');
//       console.log(item.dataValues);
//     });
//     console.log("***********************************************")
//   });


// db.Payments.count({
//   where: {
//     user_id: 8862
//   }
// }).then(function(results) {
//   console.log(results);
//   mixpanel.people.set('8862', {
//     num_of_payments: results
//   }, {
//     $ignore_time: true
//   });
// });

mixpanel.people.set('9328', {
  num_of_payments: 1337
}, {
  $ignore_time: true
});




