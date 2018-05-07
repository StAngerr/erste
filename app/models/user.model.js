const mongoose = require('mongoose');

const UserShema = new mongoose.Schema({
  id: Number,
  name: String
});

module.exports = mongoose.model('User', UserShema);
