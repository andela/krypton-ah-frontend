import actionTypes from '../../actions/authAction/actionTypes';
import initialState from '../initialState';
import authReducer from '../authReducer';
import {
  loginOkResponse,
  loginBadResponse,
  signupOkResponse,
  error,
} from '../../mockData';

const {
  AUTH_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} = actionTypes;

describe('user authentication reducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState.auth);
  });

  it('should update state when the start action is dispatched', () => {
    expect(authReducer(initialState.auth, { type: AUTH_LOADING })).toEqual((initialState, {
      authIsLoading: true,
      success: false,
      response: '',
      isAuthenticated: null,
    }));
  });

  it('should update state when the LOGIN_SUCCESS action is dispatched', () => {
    const payload = loginOkResponse;
    expect(authReducer(initialState.auth, {
      type: LOGIN_SUCCESS,
      payload
    })).toEqual((initialState, {
      authIsLoading: false,
      success: true,
      response: payload.data.message,
      isAuthenticated: true,
    }));
  });

  it('should update state when the LOGIN_FAILURE action is dispatched', () => {
    const payload = loginBadResponse;
    expect(authReducer(initialState.auth, {
      type: LOGIN_FAILURE,
      payload
    })).toEqual((initialState, {
      authIsLoading: false,
      success: false,
      response: payload.data.message,
      isAuthenticated: false,
    }));
  });


  it('should update state when the SIGNUP_SUCCESS action is dispatched', () => {
    const payload = signupOkResponse;
    expect(authReducer(initialState.auth, {
      type: SIGNUP_SUCCESS,
      payload
    })).toEqual((initialState, {
      authIsLoading: false,
      success: true,
      response: payload.data.message,
      isAuthenticated: false,
    }));
  });

  it('should update state when the SIGNUP_FAILURE action is dispatched', () => {
    const payload = error.response;
    expect(authReducer(initialState.auth, {
      type: SIGNUP_FAILURE,
      payload
    })).toEqual((initialState, {
      authIsLoading: false,
      success: false,
      response: payload.data.message,
      isAuthenticated: false,
    }));
  });
});
