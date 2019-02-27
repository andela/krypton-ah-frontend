import actionTypes from '../actions/commentAction/actionTypes';
import initialState from './initialState';
import NETWORK_ERROR from '../actions/networkError/actionType';

const {
  COMMENT_LOADING,
  COMMENT_FETCHED,
  THREADS_FETCHED,
  COMMENT_LIKED_FETCHED
} = actionTypes;

const { comment } = initialState;

export default (state = comment, action) => {
  switch (action.type) {
    case COMMENT_LOADING:
      return {
        ...state,
        commentIsLoading: true
      };
    case COMMENT_FETCHED:
      return {
        ...state,
        commentIsLoading: false,
        success: true,
        commentsArray: action.payload
      };
    case THREADS_FETCHED:
      return {
        ...state,
        commentIsLoading: false,
        success: true,
        threadsArray: action.payload
      };
    case COMMENT_LIKED_FETCHED:
      return {
        ...state,
        success: true,
        commentLike: action.payload
      };
    case NETWORK_ERROR:
      return {
        ...state,
        commentIsLoading: false,
        success: false,
        response: action.payload
      };
    default:
      return state;
  }
};
