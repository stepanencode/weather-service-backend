const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
  username: {type: String, unique: true, required: true},
  email: {type: String, unique: true, required: true, validate: { validator: validator.isEmail , message: 'Invalid email.', isAsync: false }},
  password: {type: String, required: true},
});

UserSchema.pre('save', function(next){
  if(this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, 10);
  }
  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
