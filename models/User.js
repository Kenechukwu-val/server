const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  fullname: String,
  shortbio: String,
  username: String,
  password: String,
  email: String,
  userinterest: String,
  social: String,
  createdAt: String
});

module.exports = model('User', userSchema);