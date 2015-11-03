var express = require('express');
var router = express.Router();

var data;

/* GET client listing from the DB. */
router.get('/', function(req, res, next) {

  // set variable to list of objects from DB
  console.log("In GET");
      // Read all of the database entries and return them in a JSON array
      var MongoClient = require('mongodb').MongoClient;
      MongoClient.connect("mongodb://localhost/clientdb", function(err, db) {
        if(err) throw err;
        db.collection("clients", function(err, clients){
          if(err) throw err;
          clients.find(function(err, items){
            items.toArray(function(err, itemArr){
              console.log("Document Array: ");
              console.log(itemArr);
              data = itemArr;
              res.writeHead(200);
              // send whole variable back to the controller
              res.end(JSON.stringify(itemArr));
              console.log();
            });
          });
        });
      });

});

// post client object listing to the DB
router.post('/', function(req, res, next) {
  console.log("client post route");
  // actual object from request
  //data = req.body;

  // insert object to database 
  req.on('data', function (chunk) {
  		data = req.body;
        var dataObj = data;
        console.log(dataObj);
   });
  req.on('end', function () {
        
        // Now put it into the database
        var MongoClient = require('mongodb').MongoClient;
        MongoClient.connect("mongodb://localhost/clientdb", function(err, db) {
          if(err) throw err;
          db.collection('clients').insert(dataObj,function(err, records) {
            console.log("Record added as "+records[0]);
            res.writeHead(200);
            //res.end(data);
          });
        });
      });

  // just for priting out actual object
  res.send(data);
  //console.log(data);
  //res.send(req);
});


module.exports = router;
