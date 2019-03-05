import actionTypes from '../actions/userActions/actionTypes';
import initialState from './initialState';

const {
  FETCH_USER_LOADING,
  UPDATE_USER_LOADING,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  FETCH_CURRENT_USER_SUCCESS,
  SET_IMAGE,
  REMOVE_IMAGE
} = actionTypes;

const { user } = initialState;

export default (state = user, action) => {
  switch (action.type) {
    case FETCH_USER_LOADING:
      return {
        ...state,
        fetchIsLoading: true
      };
    case UPDATE_USER_LOADING:
      return {
        ...state,
        updateIsLoading: true
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        fetchIsLoading: false,
        ...action.payload
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        fetchIsLoading: false
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        userprofile: { ...action.payload },
        updateIsLoading: false
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        updateIsLoading: false
      };
    case FETCH_CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUser: { ...action.payload },
        updateIsLoading: false
      };
    case SET_IMAGE:
      return {
        ...state,
        newProfileImage: { ...action.payload }
      };
    case REMOVE_IMAGE:
      return {
        ...state,
        newProfileImage: {}
      };
    default:
      return state;
  }
};
