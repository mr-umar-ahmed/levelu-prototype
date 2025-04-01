export const calculateXP = (taskDifficulty) => {
    const baseXP = 10;
    return baseXP * taskDifficulty;
  };
  
  export const checkLevelUp = (currentXP, levelThreshold = 100) => {
    return currentXP >= levelThreshold;
  };