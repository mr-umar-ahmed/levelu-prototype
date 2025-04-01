// src/pages/Profile.jsx
import React from 'react';

const Profile = () => {
  const mockUser = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    avatar: 'https://via.placeholder.com/150',
    level: 3,
    xp: 250,
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Profile</h2>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <img src={mockUser.avatar} alt="Avatar" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
        <div style={{ marginLeft: '1rem' }}>
          <h3>{mockUser.name}</h3>
          <p>{mockUser.email}</p>
          <p>Level: {mockUser.level}</p>
          <p>XP: {mockUser.xp}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;