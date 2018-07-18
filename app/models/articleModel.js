const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  id: Number,
  name: String,
  category: String,
  article_text: String
});

module.exports = mongoose.model('Article', ArticleSchema);
