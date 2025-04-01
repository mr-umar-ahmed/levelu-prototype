<<<<<<< HEAD
import React from 'react';

const Leaderboard = () => {
  const users = [
    { name: 'Alice', score: 95 },
    { name: 'Bob', score: 85 },
    { name: 'Charlie', score: 75 },
    { name: 'Diana', score: 65 },
    { name: 'Eve', score: 55 },
  ];

  return (
    <div style={styles.container}>
      <h2>Leaderboard</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Rank</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Score</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} style={styles.tr}>
              <td style={styles.td}>{index + 1}</td>
              <td style={styles.td}>{user.name}</td>
              <td style={styles.td}>{user.score}</td>
=======
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
>>>>>>> b6cd9b3d26dbb1db52a227d118a1ba00400d1296
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

<<<<<<< HEAD
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  table: {
    margin: '20px auto',
    borderCollapse: 'collapse',
    width: '80%',
  },
  th: {
    border: '1px solid #ddd',
    padding: '10px',
    backgroundColor: '#f4f4f4',
  },
  tr: {
    borderBottom: '1px solid #ddd',
  },
  td: {
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'center',
  },
};

=======
>>>>>>> b6cd9b3d26dbb1db52a227d118a1ba00400d1296
export default Leaderboard;