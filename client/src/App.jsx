import React from 'react';
import { AuthProvider } from './features/auth/AuthContext';
import { UserProvider } from './context/UserContext';
import { XPProvider } from './context/XPContext';
import { TaskProvider } from './context/TaskContext';
import Home from './pages/Home';

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <XPProvider>
          <TaskProvider>
            <Home />
          </TaskProvider>
        </XPProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;