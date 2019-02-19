import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const {
  AUTH_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} = actionTypes;

const { auth } = initialState;

export default (state = auth, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        authIsLoading: true
      };
    case SIGNUP_SUCCESS:
      return {
        authIsLoading: false,
        success: true,
        response: action.payload.data.message,
        isAuthenticated: false
      };
    case SIGNUP_FAILURE:
      return {
        authIsLoading: false,
        success: false,
        response: action.payload.data.message,
        isAuthenticated: false
      };
    case LOGIN_SUCCESS:
      return {
        authIsLoading: false,
        success: true,
        response: action.payload.data.message,
        isAuthenticated: true
      };
    case LOGIN_FAILURE:
      return {
        authIsLoading: false,
        success: false,
        response: action.payload.data.message,
        isAuthenticated: false
      };
    default:
      return state;
  }
};
