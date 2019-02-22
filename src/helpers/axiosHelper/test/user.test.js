import axios from 'axios';
import moxios from 'moxios';

import * as user from '../user';

describe('get user', async () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('calls axios get method', async () => {
    axios.get = jest.fn().mockResolvedValue({});
    await user.getUser({});
    expect(axios.get).toBeCalledTimes(1);
  });
  it('calls axios get method', async () => {
    axios.post = jest.fn().mockResolvedValue({});
    await user.createProfile({});
    expect(axios.post).toBeCalledTimes(1);
  });
  it('calls axios get method', async () => {
    axios.put = jest.fn().mockResolvedValue({});
    await user.updateProfile({});
    expect(axios.post).toBeCalledTimes(1);
  });
});
