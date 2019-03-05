import actionTypes from '../actions/readArticleAction/actionTypes';
import initialState from './initialState';

const {
  READ_ARTICLE_LOADING,
  READ_ARTICLE_SUCCESS,
  READ_ARTICLE_FAILURE,
  TOGGLE_ARTICLE_BOOKMARK } = actionTypes;

const { readArticle } = initialState;

export default (state = readArticle, action) => {
  switch (action.type) {
    case READ_ARTICLE_LOADING:
      return {
        ...state,
        articleIsLoading: true
      };
    case READ_ARTICLE_SUCCESS:
      return {
        ...state,
        articleIsLoading: false,
        success: true,
        successResponse: action.payload.data
      };
    case READ_ARTICLE_FAILURE:
      return {
        ...state,
        articleIsLoading: false,
        success: false,
        failureResponse: action.payload.data
      };
    case TOGGLE_ARTICLE_BOOKMARK: {
      const { successResponse } = state;
      successResponse.bookmark = !successResponse.bookmark;
      return {
        ...state,
        successResponse
      };
    }
    default:
      return state;
  }
};
