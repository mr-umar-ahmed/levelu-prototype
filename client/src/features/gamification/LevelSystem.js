export const getLevel = (xp) => {
    return Math.floor(xp / 100) + 1;
  };
  
  export const getNextLevelXP = (currentLevel) => {
    return currentLevel * 100;
  };