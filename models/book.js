const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  published: { type: Date, default: Date.now },
  description: {type: String, required:true},
  link: {type: String, required: true}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

