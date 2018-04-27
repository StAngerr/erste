const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
  id: Number,
  name: String
});

module.exports = mongoose.model('Test', TestSchema);
