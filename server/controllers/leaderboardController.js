const Leaderboard = require('../models/Leaderboard');

exports.getLeaderboard = async (req, res) => {
  const leaderboard = await Leaderboard.find().sort({ xp: -1 });
  res.json(leaderboard);
};