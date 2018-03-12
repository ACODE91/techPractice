var data = require('./seed_data.js');
var mongoose = require('mongoose');
var Stories = require('./db/models/story.js');
var Authors = require('./db/models/author.js');
var dummyData = require('../hackednews/react-client/dummy_data.js');
var hackerNewsWorker = require('./worker.js');

mongoose.connect('mongodb://localhost/hackednews');

var seedDb = function() {
  // your code here!
//should save everything in the array
  var hackerNewsPromise = new Promise(function(resolve, reject) {
    hackerNewsWorker.getJSONFromHackerNews('https://hacker-news.firebaseio.com/v0/topstories.json', function(err, data) {
      // console.log(err, 'err, expect to be null');
      //console.log('got all of this data', data);
      resolve(data); 
    });
  }).then(function(idDataArray) {
    for (let i = 0; i < idDataArray.length; i++) {
      hackerNewsWorker.getJSONFromHackerNews(`https://hacker-news.firebaseio.com/v0/item/${idDataArray[i]}.json?print=pretty`, function(err, data) {
        Stories.insertOne(data, function(err, gotData) {
          if (err) { console.log(err); }
        });
      });
    }
  });

};

Stories.findAll(function(err, data) {
  var usernames = {};

  for (let i = 0; i < data.length; i++) {
    if (!usernames[data[i]]) {
      usernames[data[i].by] = 0;
    }
  }

  var filter = [];

  for (let i = 0; i < data.length; i++) {
    for (let name in usernames) {
      if (name === data[i].by && usernames[name] < 1) {
        filter.push(data[i].by);
        usernames[name]++;
      }
    }
  }

  for (let i = 0; i < filter.length; i++) {
    hackerNewsWorker.getJSONFromHackerNews(`https://hacker-news.firebaseio.com/v0/user/${filter[i]}.json?print=pretty`, function(err, data) {
      Authors.insertOne(data, function(err, gotData) {
        if (err) { console.log(err); }
      });
    });
  }

});

seedDb();
