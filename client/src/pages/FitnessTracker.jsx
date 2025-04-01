import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HealthBar from '../components/HealthBar';
import TaskCard from '../components/TaskCard';

const FitnessTracker = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h2>Fitness Tracker</h2>
        <p>Track your fitness progress</p>
        <HealthBar health={85} />
        <div>
          <h3>Recent Tasks</h3>
          <TaskCard title="Pushups" description="20 reps" />
          <TaskCard title="Jogging" description="15 min" />
        </div>
        <button>Add New Task</button>
        <button>Set Timer</button>
        <p>Water Intake: 1.5L / 2L</p>
      </main>
      <Footer />
    </div>
  );
};

export default FitnessTracker;