import axios from 'axios';

const getNumberOfReactions = (articleId) => {
  const response = axios.get(`${process.env.API_BASE_URL}/reaction/${articleId}/reactions`);
  return response;
};

export default { getNumberOfReactions };
