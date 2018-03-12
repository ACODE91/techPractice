var express = require('express');
var storyController = require('../../db/controllers/story.js');
var storyModel = require('../../db/models/story.js');
var router = express.Router();
var HackerNewsApi = require('../../worker.js');

// Complete the route `/api/stories` in `server/routers/story.js` so that requests to this route 
// are responded to with the data for the top ten stories, retrieved from the database.
router.route('/')
  .get(function(req, res) {
    //sort score here before res.json

    var promise = new Promise(function(resolve, reject) {
      storyModel.findAll(function(error, results) { 
        resolve(results);
      });
    }).then(function(value) {
      // console.log('testing promise')
      //filter by score and only keep the highest ten
      value.sort(function(a, b) {
        return b.by.karma - a.by.karma;
      });
 
      var topTen = value.slice(0, 10);
      res.json(topTen);
      // console.log(value);
      // res.json(value);
    });

    // TODO: Replace this with stories you've retrieved from the database

  });

// Here we use express's route params
router.route('/:id')
  .get(function(req, res) {
    //use find one here.
    //format this to get the id by user entering the route
    //and it should search the hacker news API for that specific id using
    //getUserJSONFromHackerNews function
    //when we call localhost:8000/api/story/{user}
    //we should be storing that information into our database from the API

    //you'll also need to use storyModel.insertOne too.
    //use the route id to use the worker function

    //lastly you'll need to use seed.js's function to send the data back to the DB
    
    //res.send(HackerNewsApi.getJSONFromHackerNews);
   
  });

module.exports = router;
