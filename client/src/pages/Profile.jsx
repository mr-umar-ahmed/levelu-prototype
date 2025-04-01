import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h2>Profile</h2>
        <p>Username: [Username]</p>
        <p>Level: 1 | XP: 0/100</p>
        <p>Streaks: 3 days</p>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;