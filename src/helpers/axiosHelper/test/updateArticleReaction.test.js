import axios from 'axios';
import verify from '../updateArticleReaction';
import { articleId } from '../../../mockData/readArticle';

const result = {
  success: true,
  message: 'Operation Successful'
};

const reactionType = 'dislike';

describe('Test for create article reaction function', () => {
  it('should return a response object', async () => {
    const axiosPut = axios.put;
    const urlPath = `${
      process.env.API_BASE_URL
    }/articles/reaction/${articleId}/?reaction=${reactionType}`;
    axios.put = jest.fn(() => Promise.resolve(result));
    const response = await verify.updateArticleReaction(urlPath);
    expect(response).toEqual(result);
    axios.put = axiosPut;
  });
});
