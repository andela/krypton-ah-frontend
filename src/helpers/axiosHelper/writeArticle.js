import axios from 'axios';

const { API_BASE_URL } = process.env;
const hostURL = `${API_BASE_URL}/api/v1`;
// const authentication = 'authorization';
const options = {
  headers: {
    authorization: localStorage.getItem('authentication')
  }
};
export const createArticleCall = async (article) => {
  const response = await axios.post(`${hostURL}/articles`, article, options);
  return response;
};

export default { createArticleCall };
