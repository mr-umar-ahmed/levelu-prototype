import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Chatbot = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h2>AI Chatbot</h2>
        <p>Hello! How can I assist you today?</p>
        <input type="text" placeholder="Type your message..." />
        <button>Send</button>
      </main>
      <Footer />
    </div>
  );
};

export default Chatbot;