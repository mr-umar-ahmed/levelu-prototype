import React, { createContext, useContext, useState } from 'react';

const XPContext = createContext();

export const XPProvider = ({ children }) => {
  const [xp, setXP] = useState(0);

  const addXP = (amount) => setXP(xp + amount);

  return (
    <XPContext.Provider value={{ xp, addXP }}>
      {children}
    </XPContext.Provider>
  );
};

export const useXP = () => useContext(XPContext);