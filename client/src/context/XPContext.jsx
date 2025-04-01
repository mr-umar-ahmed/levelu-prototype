// src/context/XPContext.jsx
import React, { createContext, useState } from 'react';

export const XPContext = createContext();

export const XPProvider = ({ children }) => {
  const [xp, setXP] = useState(0);
  const [level, setLevel] = useState(1);

  return (
    <XPContext.Provider value={{ xp, setXP, level, setLevel }}>
      {children}
    </XPContext.Provider>
  );
};