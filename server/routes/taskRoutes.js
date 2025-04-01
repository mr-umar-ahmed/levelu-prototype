const express = require('express');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');

const router = express.Router();

router.post('/', createTask); // Create a task
router.get('/:userId', getTasks); // Get all tasks for a user
router.put('/:id', updateTask); // Update a task
router.delete('/:id', deleteTask); // Delete a task

module.exports = router;