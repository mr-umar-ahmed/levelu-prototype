const Task = require('../models/Task');

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const { userId, title, description } = req.body;

    const task = new Task({ userId, title, description });
    await task.save();

    res.status(201).json({ message: 'Task created successfully', task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all tasks for a user
exports.getTasks = async (req, res) => {
  try {
    const { userId } = req.params;

    const tasks = await Task.find({ userId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a task
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;

    const task = await Task.findByIdAndUpdate(id, { completed }, { new: true });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ message: 'Task updated successfully', task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const User = require('../models/User');

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;

    const task = await Task.findByIdAndUpdate(id, { completed }, { new: true });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Calculate XP for completing the task
    if (completed) {
      const user = await User.findById(task.userId);
      const xpEarned = 10; // Example: Award 10 XP per task
      user.xp += xpEarned;

      // Update level based on XP
      const levelThreshold = user.level * 100; // Example: Level up every 100 XP
      if (user.xp >= levelThreshold) {
        user.level += 1;
      }

      await user.save();
    }

    res.status(200).json({ message: 'Task updated successfully', task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};