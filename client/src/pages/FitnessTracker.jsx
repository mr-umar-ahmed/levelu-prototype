import React, { useState } from 'react';

const FitnessTracker = () => {
  const [workouts, setWorkouts] = useState([]);
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');

  const addWorkout = () => {
    if (!exercise || !duration) return;

    const newWorkout = { exercise, duration: `${duration} minutes` };
    setWorkouts([...workouts, newWorkout]);
    setExercise('');
    setDuration('');
  };

  return (
    <div style={styles.container}>
      <h2>Fitness Tracker</h2>
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Exercise name"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          style={styles.input}
        />
        <button onClick={addWorkout} style={styles.button}>
          Add Workout
        </button>
      </div>
      <div style={styles.workouts}>
        <h3>Your Workouts</h3>
        {workouts.length > 0 ? (
          <ul style={styles.list}>
            {workouts.map((workout, index) => (
              <li key={index}>
                {workout.exercise} - {workout.duration}
              </li>
            ))}
          </ul>
        ) : (
          <p>No workouts logged yet.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    width: '300px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  workouts: {
    textAlign: 'left',
    marginTop: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
};

export default FitnessTracker;