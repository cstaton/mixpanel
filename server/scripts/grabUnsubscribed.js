var MixpanelExport = require('mixpanel-data-export');
var Async = require('async');


var panel = new MixpanelExport({
  api_key: "7ad825d9852c26bbee21c20b4b83cff4",
  api_secret: "4426b8ed3b852207ba715468c322c9ba"
});



function getData(pageNumber, sessionId, callback) {
  console.log('Callback called page #', pageNumber);

  pageNumber++;

  var request = {
    where: 'properties["$unsubscribed"]==true',
    session_id: sessionId,
    page: pageNumber
  };

  panel
    .engage(request)
    .then(function(results) {
      var count = 1;
      //grabs users that were seen recently
      console.log('***** Results ******');
      console.log('results Length: ',results.results.length)
      // console.log(results);
      Async.each(results.results, function(item) {
        count = count + 10;

        setTimeout(function() {
          db.create({
            mixpanelId: item.$distinct_id,
            firstName: item.$properties.$first_name,
            lastName: item.$properties.$last_name,
            email: item.$properties.$email,
            unsubscribe: item.$properties.$unsubscribed
          });
        }, count)
      });

      if (results.results.length > 0) {
        setTimeout(function() {
          callback(pageNumber, sessionId, callback);
        }, 1000);
      }
    });
}


panel
  .engage({where: 'properties["$unsubscribed"]==true'})
  .then(function(results) {
    //grabs users that were seen recently
    console.log('***** Results ******');
    console.log('results length: ', results.results.length);
    // console.log(results);
    Async.each(results.results, function(item) {
      db.create({
        mixpanelId: item.$distinct_id,
        firstName: item.$properties.$first_name,
        lastName: item.$properties.$last_name,
        email: item.$properties.$email,
        unsubscribe: item.$properties.$unsubscribed
      });
    });
    setTimeout(function() {
      getData(0, results.session_id, getData);
    }, 1000);
  });



