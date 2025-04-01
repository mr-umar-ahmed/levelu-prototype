// src/pages/Dashboard.jsx
import React from 'react';
import HealthBar from '../components/HealthBar'; // Default import

const Dashboard = () => {
  const mockData = {
    tasksCompleted: 5,
    workoutsDone: 3,
    xp: 150,
    level: 2,
    streak: 7,
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Dashboard</h2>
      <p>Tasks Completed: {mockData.tasksCompleted}</p>
      <p>Workouts Done: {mockData.workoutsDone}</p>
      <HealthBar xp={mockData.xp} level={mockData.level} />
      <p>Streak: {mockData.streak} days</p>
    </div>
  );
};

export default Dashboard;