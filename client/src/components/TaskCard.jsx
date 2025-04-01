// src/components/TaskCard.jsx
import React from 'react';
import PropTypes from 'prop-types';

const TaskCard = ({ title, description, completed }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', borderRadius: '8px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Status: {completed ? 'Completed' : 'Pending'}</p>
    </div>
  );
};

// Add PropTypes validation
TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  completed: PropTypes.bool.isRequired,
};

export default TaskCard;