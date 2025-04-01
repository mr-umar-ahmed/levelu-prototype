import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HealthBar from '../components/HealthBar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h2>LevelUp: Personal Growth Hub</h2>
        <p>Welcome, [Username]!</p>
        <HealthBar health={80} />
        <div>
          <h3>Today's Progress</h3>
          <p>Study: 75% | Fitness: 50%</p>
        </div>
        <div>
          <h3>Leaderboard</h3>
          <p>1. User1 - 500 XP</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;