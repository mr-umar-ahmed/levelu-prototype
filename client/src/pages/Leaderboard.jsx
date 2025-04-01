import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Leaderboard = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h2>Leaderboard</h2>
        <ul>
          <li>User1 - 500 XP</li>
          <li>User2 - 450 XP</li>
          <li>User3 - 400 XP</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Leaderboard;