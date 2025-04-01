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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

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

export default Leaderboard;