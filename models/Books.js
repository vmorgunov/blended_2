const { Schema, model } = require('mongoose');

const bookSchema = Schema({
  author: {
    type: String,
    required: [true, 'Please enter author name'],
  },
  imageLink: {
    type: String,
    maxlength: [250, 'Please provide correct link'],
  },
  language: {
    type: String,
  },
  link: {
    type: String,
    maxlength: [500, 'Please provide correct link'],
  },
  pages: {
    type: Number,
  },
  title: {
    type: String,
    required: [true, 'Please enter title'],
    unique: [true, 'Please provide unique name'],
  },
  year: {
    type: Number,
  },

  currency: {
    type: String,
    enum: ['eu', 'us', 'ua'],
  },
});

module.exports = model('book', bookSchema);
