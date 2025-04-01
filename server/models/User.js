const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: String,
  level: { type: Number, default: 1 },
  xp: { type: Number, default: 0 },
});

module.exports = mongoose.model('User', userSchema);