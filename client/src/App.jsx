// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Default import
import Footer from './components/Footer'; // Default import
import Home from './pages/Home'; // Default import
import Dashboard from './pages/Dashboard'; // Default import
import StudyTracker from './pages/StudyTracker'; // Default import
import FitnessTracker from './pages/FitnessTracker'; // Default import
import Leaderboard from './pages/Leaderboard'; // Default import
import Chatbot from './pages/Chatbot'; // Default import
import Profile from './pages/Profile'; // Default import

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <div style={{ minHeight: '80vh', padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/study-tracker" element={<StudyTracker />} />
          <Route path="/fitness-tracker" element={<FitnessTracker />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;