import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import StudyTracker from './pages/StudyTracker';
import FitnessTracker from './pages/FitnessTracker';
import Profile from './pages/Profile';
import Leaderboard from './pages/Leaderboard';
import Chatbot from './pages/Chatbot';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <div style={styles.container}>
        {/* Add a navigation bar if needed */}
        <nav style={styles.navbar}>
          <h1>LevelUp</h1>
          <ul style={styles.navLinks}>
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/study-tracker">Study Tracker</a></li>
            <li><a href="/fitness-tracker">Fitness Tracker</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/leaderboard">Leaderboard</a></li>
            <li><a href="/chatbot">Chatbot</a></li>
          </ul>
        </nav>

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/study-tracker" element={<StudyTracker />} />
          <Route path="/fitness-tracker" element={<FitnessTracker />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="*" element={<NotFound />} /> {/* Fallback for invalid routes */}
        </Routes>
      </div>
    </Router>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    gap: '15px',
    margin: 0,
    padding: 0,
  },
  navLinksLi: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default App;