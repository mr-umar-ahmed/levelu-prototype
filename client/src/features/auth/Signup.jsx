import React from 'react';

const Signup = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Signup</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Signup</button>
    </div>
  );
};

export default Signup;