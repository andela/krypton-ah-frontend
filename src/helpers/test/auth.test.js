import moxios from 'moxios';
import {
  signupCall,
  loginCall
} from '../axiosHelper/auth';
import {
  payload,
  fakeUser2,
  signupEndpoint,
  signinEndpoint,
  signupOkResponse,
  loginOkResponse,
} from '../../mockData';

describe('axios requests', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('makes axios request to the signup endpoint and get a response', async () => {
    moxios.stubRequest(signupEndpoint, {
      status: 201,
      response: { signupOkResponse },
    });
    const response = await signupCall(payload);
    expect(response.data.signupOkResponse).toEqual(signupOkResponse);
  });
  it('makes axios request to the signin endpoint and get a response', async () => {
    moxios.stubRequest(signinEndpoint, {
      status: 200,
      response: { loginOkResponse },
    });
    const response = await loginCall(fakeUser2);
    expect(response.data.loginOkResponse).toEqual(loginOkResponse);
  });
});
