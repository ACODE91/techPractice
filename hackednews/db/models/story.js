var mongoose = require('mongoose');

var storySchema = mongoose.Schema({
  // id: {
  //   type: Number,
  //   unique: true
  // },
  by: Object,
  id: Number,
  score: Number,
  title: String,
});

// var authorSchema = mongoose.Schema({
//   name: String,
//   karma: Number,
//   about: String,
// });

var StoryModel = mongoose.model('Story', storySchema);
// var AuthorModel = mongoose.model('Author', authorSchema);

// findAll retrieves all stories
function findAll(callback) {
  StoryModel.find({}, callback);
}

// findOne will retrieve the story associated with the given id
function findOne(id, callback) {
  StoryModel.find({by: id}, callback);
}

// insertOne inserts a story into the db
function insertOne(story, callback) {
  StoryModel.create(story, callback);
  
}

exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;

