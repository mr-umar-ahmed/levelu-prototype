import { useState } from 'react';

const useChatbot = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (text) => {
    setMessages([...messages, { text, sender: 'user' }]);
    // Placeholder for OpenAI API response
    setMessages((prev) => [...prev, { text: 'AI response', sender: 'bot' }]);
  };

  return { messages, sendMessage };
};

export default useChatbot;