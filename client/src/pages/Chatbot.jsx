import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    // Simulate a bot response
    const botResponse = `You said: "${input}". How can I assist you further?`;

    // Add user message and bot response to the chat
    setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: botResponse }]);
    setInput('');
  };

  return (
    <div style={styles.container}>
      <h2>Chatbot</h2>
      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div key={index} style={msg.sender === 'user' ? styles.userMessage : styles.botMessage}>
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={styles.input}
        />
        <button onClick={handleSendMessage} style={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  chatBox: {
    border: '1px solid #ccc',
    height: '300px',
    overflowY: 'auto',
    padding: '10px',
    margin: '20px auto',
    width: '80%',
    backgroundColor: '#f9f9f9',
  },
  userMessage: {
    textAlign: 'right',
    color: '#fff',
    backgroundColor: '#007bff',
    padding: '10px',
    borderRadius: '5px',
    margin: '5px',
  },
  botMessage: {
    textAlign: 'left',
    color: '#000',
    backgroundColor: '#e9ecef',
    padding: '10px',
    borderRadius: '5px',
    margin: '5px',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  input: {
    padding: '10px',
    width: '70%',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Chatbot;