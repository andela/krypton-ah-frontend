import axios from 'axios';

const { API_BASE_URL } = process.env;
const options = {
  headers: {
    authorization: localStorage.getItem('authentication')
  }
};
export const createArticleCall = async (article) => {
  const response = await axios.post(`${API_BASE_URL}/articles`, article, options);
  return response;
};

export default { createArticleCall };
