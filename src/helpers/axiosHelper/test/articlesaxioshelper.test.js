import axios from 'axios';
import { API_BASE_URL } from '../../../constants';
import {
  fetchTrendingArticles,
  fetchPopularArticles,
  fetchFeaturedArticles,
  fetchCategories,
  fetchTags
} from '../articlesAxiosCalls';
import { fetchArticlesresponse } from '../../../mockData';

describe('Test for get article function', () => {
  it('should return a response object', async () => {
    const axiosGet = axios.get;
    const urlPath = `${API_BASE_URL}/api/v1/articles/popular?limit=5`;
    axios.get = jest.fn(() => Promise.resolve(fetchArticlesresponse));
    const response = await fetchTrendingArticles(urlPath);
    expect(response).toEqual(fetchArticlesresponse);
    axios.get = axiosGet;
  });

  it('should return a response object', async () => {
    const axiosGet = axios.get;
    const urlPath = `${API_BASE_URL}/api/v1/articles/popular?limit=5`;
    axios.get = jest.fn(() => Promise.resolve(fetchArticlesresponse));
    const response = await fetchPopularArticles(urlPath);
    expect(response).toEqual(fetchArticlesresponse);
    axios.get = axiosGet;
  });

  it('should return a response object', async () => {
    const axiosGet = axios.get;
    const urlPath = `${API_BASE_URL}/api/v1/articles/popular?limit=5`;
    axios.get = jest.fn(() => Promise.resolve(fetchArticlesresponse));
    const response = await fetchFeaturedArticles(urlPath);
    expect(response).toEqual(fetchArticlesresponse);
    axios.get = axiosGet;
  });

  it('should return a response object', async () => {
    const axiosGet = axios.get;
    const urlPath = `${API_BASE_URL}/api/v1/articles/popular?limit=5`;
    axios.get = jest.fn(() => Promise.resolve(fetchArticlesresponse));
    const response = await fetchCategories(urlPath);
    expect(response).toEqual(fetchArticlesresponse);
    axios.get = axiosGet;
  });

  it('should return a response object', async () => {
    const axiosGet = axios.get;
    const urlPath = `${API_BASE_URL}/api/v1/articles/popular?limit=5`;
    axios.get = jest.fn(() => Promise.resolve(fetchArticlesresponse));
    const response = await fetchTags(urlPath);
    expect(response).toEqual(fetchArticlesresponse);
    axios.get = axiosGet;
  });
});
