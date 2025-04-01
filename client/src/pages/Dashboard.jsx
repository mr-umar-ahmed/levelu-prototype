import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h2>Dashboard</h2>
      <p>Welcome back! Here’s what you can do:</p>
      <ul style={styles.list}>
        <li><Link to="/study-tracker">Study Tracker</Link></li>
        <li><Link to="/fitness-tracker">Fitness Tracker</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
        <li><Link to="/chatbot">Chatbot</Link></li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  link: {
    display: 'block',
    margin: '10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
  },
};

export default Dashboard;