import axios from 'axios';
import { API_BASE_URL } from '../../constants';

const getAnArticle = (articleId) => {
  const response = axios.get(`${API_BASE_URL}/api/v1/articles/${articleId}`);
  return response;
};

export default { getAnArticle };
