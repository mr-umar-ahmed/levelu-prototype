import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HealthBar from '../components/HealthBar';
import TaskCard from '../components/TaskCard';

const StudyTracker = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h2>Study Tracker</h2>
        <p>Track your study progress</p>
        <HealthBar health={70} />
        <div>
          <h3>Recent Tasks</h3>
          <TaskCard title="Assignment" description="Math Ch. 5" />
          <TaskCard title="Project" description="Essay Draft" />
        </div>
        <button>Add New Task</button>
        <button>Set Timer</button>
      </main>
      <Footer />
    </div>
  );
};

export default StudyTracker;