import axios from 'axios';
import '@babel/polyfill';
import { API_BASE_URL } from '../../constants';

const fetchTags = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/v1/tags`);
  return response;
};

const fetchPopularArticles = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/v1/articles/?limit=4&offset=4`);
  return response;
};

const fetchTrendingArticles = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/v1/articles/?limit=4`);
  return response;
};

const fetchFeaturedArticles = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/v1/articles/?limit=4`);
  return response;
};

const fetchCategories = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/v1/categories`);
  return response;
};

export {
  fetchTrendingArticles,
  fetchPopularArticles,
  fetchFeaturedArticles,
  fetchCategories,
  fetchTags
};
