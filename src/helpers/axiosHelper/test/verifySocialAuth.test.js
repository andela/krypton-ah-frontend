import axios from 'axios';
import verify from '../verifySocialAuth';
import { socialToken } from '../../../mockData';

describe('Test for verify social authentication function', () => {
  it('should return a token', async () => {
    const axiosGet = axios.get;
    const urlPath = `/auth/${socialToken}`;
    axios.get = jest.fn(() => Promise.resolve(socialToken));
    const response = await verify.verifySocialAuth(urlPath);
    expect(response).toEqual(socialToken);
    axios.get = axiosGet;
  });
});
