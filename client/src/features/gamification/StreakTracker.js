export const updateStreak = (lastCompletedDate, currentDate) => {
    const diff = (currentDate - lastCompletedDate) / (1000 * 60 * 60 * 24);
    return diff === 1 ? streak + 1 : diff > 1 ? 0 : streak;
  };