import axios from 'axios';
import '@babel/polyfill';

const fetchTags = async () => {
  const response = await axios.get('https://krypton-ah-stage.herokuapp.com/api/v1/tags');
  return response;
};

const fetchPopularArticles = async () => {
  const response = await axios.get('https://krypton-ah-stage.herokuapp.com/api/v1/articles/?limit=4&offset=4');
  return response;
};

const fetchTrendingArticles = async () => {
  const response = await axios.get('https://krypton-ah-stage.herokuapp.com/api/v1/articles/?limit=4');
  return response;
};

const fetchFeaturedArticles = async () => {
  const response = await axios.get('https://krypton-ah-stage.herokuapp.com/api/v1/articles/?limit=4');
  return response;
};

const fetchCategories = async () => {
  const response = await axios.get('https://krypton-ah-stage.herokuapp.com/api/v1/categories');
  return response;
};

export {
  fetchTrendingArticles,
  fetchPopularArticles,
  fetchFeaturedArticles,
  fetchCategories,
  fetchTags
};
