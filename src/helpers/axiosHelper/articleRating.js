import axios from 'axios';
import { getUserIdFromLocalStorage } from '../jwt';

const createRating = (ratingDetails) => {
  const response = axios.post(`${process.env.API_BASE_URL}/articles/rating`, ratingDetails);
  return response;
};

const getUserRating = (articleId) => {
  const userId = getUserIdFromLocalStorage();
  const response = axios.get(`${process.env.API_BASE_URL}/articles/rating/${userId}/${articleId}`);
  return response;
};

export { getUserRating, createRating };
