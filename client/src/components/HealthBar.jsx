import React from 'react';

const HealthBar = ({ health = 100 }) => {
  return (
    <div style={{ width: '100%', background: '#ddd' }}>
      <div
        style={{
          width: `${health}%`,
          height: '20px',
          background: health > 50 ? 'green' : 'red',
        }}
      />
      <p>Health: {health}%</p>
    </div>
  );
};

export default HealthBar;