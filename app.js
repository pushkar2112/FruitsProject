const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB")


 
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

  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find some documents
    collection.find({}).toArray(function(err, fruits) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(fruits)
      callback(fruits);
    });
  }