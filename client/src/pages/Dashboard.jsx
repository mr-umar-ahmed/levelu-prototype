import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h2>Dashboard</h2>
        <p>Your stats and progress overview here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;