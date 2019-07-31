const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {type: String, unique: true, required: true},
  email: {type: String, unique: true, required: true},
  hash: {type: String},
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
