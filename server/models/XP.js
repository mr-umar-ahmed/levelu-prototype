const mongoose = require('mongoose');

const xpSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('XP', xpSchema);