import axios from 'axios';
import { getUserRating, createRating } from '../articleRating';
import { articleId, payload } from '../../../mockData/readArticle';

describe('Test for get article rating axios calls', () => {
  it('should return a response object', async () => {
    const axiosPost = axios.post;
    axios.post = jest.fn(() => Promise.resolve(payload));
    const response = await createRating(articleId);
    expect(response).toEqual(payload);
    axios.post = axiosPost;
  });

  it('should return a response object', async () => {
    const axiosGET = axios.get;
    axios.get = jest.fn(() => Promise.resolve(payload));
    const response = await getUserRating(articleId, articleId);
    expect(response).toEqual(payload);
    axios.get = axiosGET;
  });
});
