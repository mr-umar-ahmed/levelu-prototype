// src/pages/Chatbot.jsx
import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setMessages((prev) => [...prev, { text: 'This is a mock response.', sender: 'bot' }]);
      setInput('');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>AI Chatbot</h2>
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '1rem' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <p style={{ display: 'inline-block', padding: '8px', borderRadius: '8px', background: msg.sender === 'user' ? '#28a745' : '#007bff', color: '#fff' }}>
              {msg.text}
            </p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '1rem', display: 'flex' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage} style={{ marginLeft: '1rem', padding: '8px 16px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;