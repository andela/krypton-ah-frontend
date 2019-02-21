import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actions from '../actionTypes';
import verify from '../../../helpers/axiosHelper/verifySocialAuth';
import { twitterPath } from '../../../constants';
import { loginOkResponse, socialToken, mockPath } from '../../../mockData';
import {
  loginSuccess, loginFailed, socialLogin
} from '../socialLogin';

const mockStore = configureStore([thunk]);
const store = mockStore({ auth: {} });

describe('Unit test for SocialLogin Action', () => {
  const error = {
    message: 'authentication failed',
  };

  beforeEach(() => {
    store.clearActions();
  });

  it('should return an action, SOCIAL_AUTH_SUCCESS when social media authentication is successfull', () => {
    expect(loginSuccess())
      .toEqual({
        type: actions.SOCIAL_AUTH_SUCCESS
      });
  });

  it('should return an action, SOCIAL_AUTH_SUCCESS when social media authentication fails', () => {
    expect(loginFailed(error))
      .toEqual({
        type: actions.SOCIAL_AUTH_FAIL,
        payload: error
      });
  });

  it('should return an action if authentication response status is 200', async () => {
    verify.verifySocialAuth = jest.fn(() => Promise.resolve({
      status: 200,
      ...loginOkResponse
    }));

    const expectedAction = [{
      payload: {
        status: 200,
        ...loginOkResponse
      },
      type: actions.SOCIAL_AUTH_SUCCESS
    }];
    await store.dispatch(socialLogin(socialToken, mockPath));
    expect(store.getActions()).toEqual(expectedAction);
    expect(verify.verifySocialAuth).toHaveBeenCalled();
  });

  it('should return an action if authentication response status is 201', async () => {
    verify.verifySocialAuth = jest.fn(() => Promise.resolve({
      status: 201,
      ...loginOkResponse
    }));

    const expectedAction = [{
      payload: {
        status: 201,
        ...loginOkResponse
      },
      type: actions.SOCIAL_AUTH_SUCCESS
    }];
    await store.dispatch(socialLogin(socialToken, mockPath));
    expect(store.getActions()).toEqual(expectedAction);
    expect(verify.verifySocialAuth).toHaveBeenCalled();
  });

  it('should return an action if authentication response status is 200', async () => {
    verify.verifySocialAuth = jest.fn();

    const expectedAction = [{
      payload: {},
      type: actions.SOCIAL_AUTH_SUCCESS
    }];
    await store.dispatch(socialLogin(socialToken, twitterPath));
    expect(store.getActions()).toEqual(expectedAction);
    expect(verify.verifySocialAuth).not.toHaveBeenCalled();
  });

  it('should return an action if authentication response status is 500', async () => {
    verify.verifySocialAuth = jest.fn(() => { throw new Error(); });

    const expectedAction = [{
      type: actions.SOCIAL_AUTH_FAIL,
      payload: new Error()
    }];
    await store.dispatch(socialLogin(socialToken, mockPath));
    expect(store.getActions()).toEqual(expectedAction);
    expect(verify.verifySocialAuth).toHaveBeenCalled();
  });
});
