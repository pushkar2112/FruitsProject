const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, function(){
    client.close();
  })
  
});
 
const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Insert some documents
    collection.insertMany([
        {
            name : "Apple",
            score: 8,
            review: "Great Fruit!"
        },
        {
            name : "Orange",
            score: 6,
            review: "Kinda Sour"
        },
        {
            name : "Banana",
            score: 9,
            review: "Great Stuff!"
        }
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3,result.insertedCount);
      assert.equal(3,Object.keys(result.insertedIds).length);
// https://stackoverflow.com/questions/68474512/mongodb-nodejs-error-assert-equal3-result-result-n-not-working-giving-error
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }