// src/pages/Leaderboard.jsx
import React from 'react';

const Leaderboard = () => {
  const mockLeaderboard = [
    { rank: 1, name: 'Alice', xp: 500 },
    { rank: 2, name: 'Bob', xp: 450 },
    { rank: 3, name: 'Charlie', xp: 400 },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Leaderboard</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Rank</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>XP</th>
          </tr>
        </thead>
        <tbody>
          {mockLeaderboard.map((user) => (
            <tr key={user.rank}>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{user.rank}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{user.name}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{user.xp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;