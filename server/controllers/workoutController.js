const Workout = require('../models/Workout');

exports.getWorkouts = async (req, res) => {
  const workouts = await Workout.find();
  res.json(workouts);
};

exports.createWorkout = async (req, res) => {
  const workout = new Workout(req.body);
  await workout.save();
  res.json(workout);
};