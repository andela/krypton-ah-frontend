import axios from 'axios';
import { API_BASE_URL } from '../../constants';

const fetchTags = async () => {
<<<<<<< HEAD
  const response = await axios.get(`${API_BASE_URL}/tags`);
=======
  const response = await axios.get(`${API_BASE_URL}/api/v1/tag`);
>>>>>>> landing-page-logic
  return response;
};

const fetchPopularArticles = async () => {
  const response = await axios.get(`${API_BASE_URL}/articles/popular/?limit=10`);
  return response;
};

const fetchFeaturedArticles = async () => {
  const response = await axios.get(`${API_BASE_URL}/articles/?limit=4`);
  return response;
};

const fetchCategories = async () => {
  const response = await axios.get(`${API_BASE_URL}/categories`);
  return response;
};

export {
  fetchPopularArticles,
  fetchFeaturedArticles,
  fetchCategories,
  fetchTags
};
