// src/pages/StudyTracker.jsx
import React, { useEffect, useState } from 'react';
import TaskCard from '../components/TaskCard';
import { fetchData } from '../services/apiService';

const StudyTracker = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await fetchData('/api/tasks'); // Replace with your backend endpoint
        setTasks(data);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Study Tracker</h2>
      {tasks.length > 0 ? (
        tasks.map((task) => <TaskCard key={task.id} {...task} />)
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
};

export default StudyTracker;