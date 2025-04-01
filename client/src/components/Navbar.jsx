import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
      <h1>LevelUp</h1>
      <div>
        <span>Level: 1</span> | <span>XP: 0/100</span>
      </div>
    </nav>
  );
};

export default Navbar;