// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css'; // Global styles
import App from './App';
import { UserProvider } from './context/UserContext'; // User context provider
import { XPProvider } from './context/XPContext'; // XP context provider
import { TaskProvider } from './context/TaskContext'; // Task context provider

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* Wrap the app with context providers */}
    <UserProvider>
      <XPProvider>
        <TaskProvider>
          <App />
        </TaskProvider>
      </XPProvider>
    </UserProvider>
  </React.StrictMode>
);