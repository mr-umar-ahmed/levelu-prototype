const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  xp: Number,
  rank: Number,
});

module.exports = mongoose.model('Leaderboard', leaderboardSchema);