var data = require('./seed_data.js');
var mongoose = require('mongoose');
var Stories = require('./db/models/story.js');
var dummyData = require('../hackednews/react-client/dummy_data.js')

mongoose.connect('mongodb://localhost/hackednews');

var seedDb = function(data) {
  // your code here!
//should save everything in the array

for(let i = 0; i < data.length; i++){
Stories.insertOne(data[i], function(err, gotData){

if(err) console.log(err);
})
}

};

//seedDb(data);
seedDb(dummyData);