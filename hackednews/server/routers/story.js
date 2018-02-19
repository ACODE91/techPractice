var express = require('express');
var storyController = require('../../db/controllers/story.js');
var storyModel = require('../../db/models/story.js')
var router = express.Router();

// Complete the route `/api/stories` in `server/routers/story.js` so that requests to this route 
// are responded to with the data for the top ten stories, retrieved from the database.
router.route('/')
  .get(function(req, res) {
    //sort score here before res.json

    var promise = new Promise(function(resolve, reject) {
      storyModel.findAll(function(error, results){
        resolve(results)
      })
    }).then(function(value) {
      // console.log('testing promise')
      // //filter by score and only keep the highest ten
      // value.sort(function(a, b){
      //   return b.by.karma - a.by.karma;
      // })
 
      // var topTen = value.slice(0, 10);
      // res.json(topTen);
      res.json(value)
    });

     // TODO: Replace this with stories you've retrieved from the database

  });

// Here we use express's route params
router.route('/:id')
  .get(function(req, res) {
    //use find one here.
  });

module.exports = router;
