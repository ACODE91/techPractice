var data = require('./seed_data.js');
var mongoose = require('mongoose');
var Stories = require('./db/models/story.js');
var dummyData = require('../hackednews/react-client/dummy_data.js');
var hackerNewsWorker = require('./worker.js');

mongoose.connect('mongodb://localhost/hackednews');

var seedDb = function() {
  // your code here!
//should save everything in the array

  // for (let i = 0; i < data.length; i++) {
  //   Stories.insertOne(data[i], function(err, gotData) {

  //     if (err) {console.log(err);}
  //   });
  // }

  var hackerNewsPromise = new Promise(function(resolve, reject) {
    hackerNewsWorker.getJSONFromHackerNews('https://hacker-news.firebaseio.com/v0/topstories.json', function(err, data) {
      // console.log(err, 'err, expect to be null');
      //console.log('got all of this data', data);
      resolve(data); //mongoose.disconnect();
    });
  }).then(function(idDataArray) {
    //iterate through idDataArray 
    for(let i = 0; i < idDataArray.length; i++) {
      hackerNewsWorker.getJSONFromHackerNews(`https://hacker-news.firebaseio.com/v0/item/${idDataArray[i]}.json?print=pretty`, function(err, data) {
        console.log(data)
        
      });
    }
  });
  //console.log(data);

};

seedDb();
//seedDb(data);
//seedDb(dummyData);