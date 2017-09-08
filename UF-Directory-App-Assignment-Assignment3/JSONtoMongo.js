'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');


/* Connect to your database */
mongoose.Promise = global.Promise; //update to global promise

mongoose.connect(config.db.uri);
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
 var newData = fs.readFile('listing.json', 'utf8', function(err,data){  //UTF8 is a JS encoder/decoder
  if (err) throw err; //if error throws error before anything else.
  var JSONParse = JSON.parse(data);
  Listing.insertMany(parsedJSON.entries, function(err, docs){
    if (err) throw err;
  });


 });

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */