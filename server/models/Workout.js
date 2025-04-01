const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: String,
  duration: Number,
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Workout', workoutSchema);