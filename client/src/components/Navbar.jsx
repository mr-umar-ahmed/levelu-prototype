// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#282c34', color: 'white' }}>
      <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Home</Link>
      <Link to="/dashboard" style={{ marginRight: '1rem', color: 'white' }}>Dashboard</Link>
      <Link to="/study-tracker" style={{ marginRight: '1rem', color: 'white' }}>Study Tracker</Link>
      <Link to="/fitness-tracker" style={{ marginRight: '1rem', color: 'white' }}>Fitness Tracker</Link>
      <Link to="/leaderboard" style={{ marginRight: '1rem', color: 'white' }}>Leaderboard</Link>
      <Link to="/chatbot" style={{ marginRight: '1rem', color: 'white' }}>Chatbot</Link>
      <Link to="/profile" style={{ color: 'white' }}>Profile</Link>
    </nav>
  );
};

export default Navbar;