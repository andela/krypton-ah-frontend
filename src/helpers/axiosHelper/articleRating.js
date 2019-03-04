import axios from 'axios';
import { API_BASE_URL } from '../../constants';

const createRating = (ratingDetails) => {
  const response = axios.post(`${API_BASE_URL}/articles/rating`, ratingDetails);
  return response;
};

const getUserRating = (articleId, userId) => {
  const response = axios.get(`${API_BASE_URL}/articles/rating/${userId}/${articleId}`);
  return response;
};

export { getUserRating, createRating };
