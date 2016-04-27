var MixpanelExport = require('mixpanel-data-export');
var Async = require('async');
var db = require('./db');


var panel = new MixpanelExport({
  api_key: "bab29e942121cfebdb84b85bda728c14",
  api_secret: "70fbdcee8c70e3f546e84c44f60cea5c"
});


panel
  .engage({where: 'properties["$last_seen"]>="2016-04-21T14:25:16"'})
  .then(function(results) {
    console.log('***** Results ******');
    Async.each(results.results, function(item) {
      db.create({
        mixpanelId: item.$distinct_id,
        firstName: item.$properties.$first_name,
        lastName: item.$properties.$last_name
      });
    });
  });