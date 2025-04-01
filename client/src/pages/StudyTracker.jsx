import React, { useState } from 'react';

const StudyTracker = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = prompt('Enter task name:');
    if (newTask) {
      setTasks([...tasks, newTask]);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Study Tracker</h2>
      <button onClick={addTask} style={styles.button}>Add Task</button>
      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
    marginTop: '20px',
  },
};

export default StudyTracker;