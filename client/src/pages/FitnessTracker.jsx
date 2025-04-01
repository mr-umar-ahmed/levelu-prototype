// src/pages/FitnessTracker.jsx
import React from 'react';

const FitnessTracker = () => {
  const mockWorkouts = [
    { id: 1, activity: 'Running', duration: 30, caloriesBurned: 200 },
    { id: 2, activity: 'Cycling', duration: 45, caloriesBurned: 300 },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Fitness Tracker</h2>
      {mockWorkouts.map((workout) => (
        <div key={workout.id}>
          <p>{workout.activity} - {workout.duration} minutes</p>
          <p>Calories Burned: {workout.caloriesBurned}</p>
        </div>
      ))}
    </div>
  );
};

export default FitnessTracker;