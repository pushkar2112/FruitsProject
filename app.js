const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB")

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Pineapple",
  rating: 10,
  review: "Pineapples are so yummy!"
});

// fruit.save()
 

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
  name: "Amy",
  age: 12,
  favouriteFruit: fruit
});

person.save()


// Fruit.find(function(err, fruits){
//   if (err){
//     console.log(err);
//   } else {

//     mongoose.connection.close()

//     fruits.forEach(function(fruit){
//       console.log(fruit.name);
//     });
//   }
// });


// Fruit.updateOne({_id: "62b3ee894d8214f03f02f68d"}, {name: "Kiwi"}, function(err) {
//   if (err){
//     console.log(err);
//   }  else {
//     console.log("Succesfully updated!!");
//   }
// })

Fruit.deleteOne({name: "Orange"}, function(err){
  if (err){
    console.log(err);
  }  else {
    console.log("Succesfully deleted!!");
  }
})