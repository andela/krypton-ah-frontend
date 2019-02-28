import axios from 'axios';
import verify from '../totalArticleReactions';
import { articleId, totalReactions as payload } from '../../../mockData/readArticle';

describe('Test for get article function', () => {
  it('should return a response object', async () => {
    const axiosGet = axios.get;
    const urlPath = `${process.env.API_BASE_URL}/reaction/${articleId}/reactions`;
    axios.get = jest.fn(() => Promise.resolve(payload));
    const response = await verify.getNumberOfReactions(urlPath);
    expect(response).toEqual(payload);
    axios.get = axiosGet;
  });
});
