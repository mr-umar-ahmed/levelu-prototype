// src/components/HealthBar.jsx
import React from 'react';
import PropTypes from 'prop-types';

const HealthBar = ({ xp, level }) => {
  const percentage = Math.min((xp % 100) / 100, 1) * 100;

  return (
    <div style={{ width: '100%', background: '#f3f3f3', borderRadius: '5px', overflow: 'hidden' }}>
      <div style={{
        width: `${percentage}%`,
        height: '20px',
        background: 'green',
        transition: 'width 0.3s ease'
      }}></div>
      <p>Level {level} - XP: {xp}</p>
    </div>
  );
};

// Add PropTypes validation
HealthBar.propTypes = {
  xp: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
};

export default HealthBar; // Default export