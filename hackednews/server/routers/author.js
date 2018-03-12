var express = require('express');
var authorModel = require('../../db/models/author.js');
var router = express.Router();
var storyModel = require('../../db/models/story.js');

router.route('/')
  .get(function(req, res) {
    //if you find an existing author, do not SHOW on page.
    var promise = new Promise(function(resolve, reject) {
      authorModel.findAll(function(error, results) { 
        resolve(results);
      });
    }).then(function(value) {

      value.sort(function(a, b) {
        return b.karma - a.karma;
      });
      
      var topTen = value.slice(0, 10);
      res.json(topTen);
    });
  });

router.route('/:id')
  .get(function(req, res) {

    storyModel.findOne(req.params.id, function(error, results) {
      res.json(results);
    });

  });

module.exports = router;