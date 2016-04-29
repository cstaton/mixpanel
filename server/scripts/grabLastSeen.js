var MixpanelExport = require('mixpanel-data-export');
var Async = require('async');

var panel = new MixpanelExport({
  api_key: "7ad825d9852c26bbee21c20b4b83cff4",
  api_secret: "4426b8ed3b852207ba715468c322c9ba"
});

panel
  .engage({where: 'properties["$last_seen"]>="2016-04-21T14:25:16"'})
  .then(function(results) {
    //grabs users that were seen recently
    console.log('***** Results ******');
    Async.each(results.results, function(item) {
      // db.create({
      //   mixpanelId: item.$distinct_id,
      //   firstName: item.$properties.$first_name,
      //   lastName: item.$properties.$last_name
      // });
    });
  });