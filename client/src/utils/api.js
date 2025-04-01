export const fetchData = async (endpoint, options = {}) => {
    const response = await fetch(`/api${endpoint}`, options);
    return response.json();
  };