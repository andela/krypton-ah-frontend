import axios from 'axios';
import verify from '../getArticle';
import { articleId, payload } from '../../../mockData/readArticle';

describe('Test for get article function', () => {
  it('should return a response object', async () => {
    const axiosGet = axios.get;
    const urlPath = `${process.env.API_BASE_URL}/articles/${articleId}`;
    axios.get = jest.fn(() => Promise.resolve(payload));
    const response = await verify.getAnArticle(urlPath);
    expect(response).toEqual(payload);
    axios.get = axiosGet;
  });
});
