const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser : true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name : String,
    rating : Number,
    review : String

});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
    name : "Apple",
    rating: 7,
    review : "pretty solid as a fruit"
});

fruit.save();

Fruit.find(function(err,fruits){
    if(err) console.log(err);
    else console.log(fruits);
})

// Fruit.deleteMany({name:"Apple"}, function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("deleted succesfully");
//     }
// });