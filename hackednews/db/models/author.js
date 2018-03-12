var mongoose = require('mongoose');

var authorSchema = mongoose.Schema({
  id: String,
  karma: Number,
  about: String,
});

var AuthorModel = mongoose.model('Author', authorSchema);

// findAll retrieves all stories
function findAll(callback) {
  AuthorModel.find({}, callback);
}

// findOne will retrieve the story associated with the given id
function findOne(id, callback) {
  AuthorModel.find({id: id}, callback);
}

// insertOne inserts a story into the db
function insertOne(author, callback) {
  AuthorModel.create(author, callback);
}

exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;

