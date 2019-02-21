import axios from 'axios';
import '@babel/polyfill';

const fetchTags = async () => {
  const response = await axios.get('http://localhost:3000/api/v1/tags');
  return response;
};

const fetchPopularArticles = async () => {
  const response = await axios.get('http://localhost:3000/api/v1/articles/popular');
  return response;
};

const fetchTrendingArticles = async () => {
  const response = await axios.get('http://localhost:3000/api/v1/articles/trending');
  return response;
};

const fetchFeaturedArticles = async () => {
  const response = await axios.get('http://localhost:3000/api/v1/articles');
  return response;
};

const fetchCategories = async () => {
  const response = await axios.get('http://localhost:3000/api/v1/categories');
  return response;
};

export {
  fetchPopularArticles,
  fetchFeaturedArticles,
  fetchTrendingArticles,
  fetchCategories,
  fetchTags
};
