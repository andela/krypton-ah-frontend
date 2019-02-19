import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from '../authActions';
import actionTypes from '../actionTypes';
import * as axios from '../../../helpers/axiosHelper/auth';
import {
  payload,
  signupOkResponse,
  loginOkResponse,
  mockResponse,
  fakeUser2
} from '../../../mockData';

const mockStore = configureStore([thunk]);
const store = mockStore({ auth: {} });
const dispatch = jest.fn();

describe('user authentication actions Signup', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    store.clearActions();
    dispatch.mockRestore();
    moxios.uninstall();
  });

  it(`should return an action object once ${actionTypes.SIGNUP_SUCCESS} is fired`, () => {
    expect(actions.signUpSuccess(payload)).toEqual({
      type: actionTypes.SIGNUP_SUCCESS,
      payload
    });
  });

  it(`should return an action object once ${actionTypes.SIGNUP_FAILURE} is fired`, () => {
    expect(actions.signUpFailure(payload)).toEqual({
      type: actionTypes.SIGNUP_FAILURE,
      payload
    });
  });

  it('should call the auth start dispatch function', () => {
    axios.loginCall = jest.fn().mockResolvedValue(mockResponse);
    actions.userSignUp(payload)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: actionTypes.AUTH_LOADING });
  });

  it('should call the signup success dispatch function', async () => {
    axios.signupCall = jest.fn().mockResolvedValue(signupOkResponse);
    await actions.userSignUp(payload)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({
      type: actionTypes.SIGNUP_SUCCESS,
      payload: signupOkResponse,
    });
    store.clearActions();
  });
});

describe('user authentication actions login', () => {
  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });
  afterEach(() => {
    dispatch.mockRestore();
    moxios.uninstall();
  });

  it(`should return an action object once ${actionTypes.LOGIN_SUCCESS} is fired`, () => {
    expect(actions.loginSuccess(payload)).toEqual({
      type: actionTypes.LOGIN_SUCCESS,
      payload
    });
  });

  it(`should return an action object once ${actionTypes.LOGIN_FAILURE} is fired`, () => {
    expect(actions.loginFailure(payload)).toEqual({
      type: actionTypes.LOGIN_FAILURE,
      payload
    });
  });

  it('should call the auth start dispatch function', () => {
    axios.loginCall = jest.fn().mockResolvedValue(mockResponse);
    actions.userLogin(fakeUser2)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: actionTypes.AUTH_LOADING });
  });

  it('should call the login success dispatch function', async () => {
    axios.loginCall = jest.fn().mockResolvedValue(loginOkResponse);
    await actions.userLogin(fakeUser2)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({ type: actionTypes.LOGIN_SUCCESS, payload: loginOkResponse });
  });
});
