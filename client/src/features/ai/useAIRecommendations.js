import { useState, useEffect } from 'react';

const useAIRecommendations = (userProgress) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Placeholder for OpenAI API call
    setRecommendations(['Study Math', 'Do 20 pushups']);
  }, [userProgress]);

  return recommendations;
};

export default useAIRecommendations;