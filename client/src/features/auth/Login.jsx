import React from 'react';

const Login = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
};

export default Login;