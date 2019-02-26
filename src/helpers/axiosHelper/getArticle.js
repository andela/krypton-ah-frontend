import axios from 'axios';

const getAnArticle = (articleId) => {
  const response = axios.get(`${process.env.API_BASE_URL}/api/v1/articles/${articleId}`);
  return response;
};

export default { getAnArticle };
