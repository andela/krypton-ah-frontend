import axios from 'axios';
import { API_BASE_URL } from '../../constants';

const fetchTags = async () => {
  const response = await axios.get(`${API_BASE_URL}/tags`);
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
