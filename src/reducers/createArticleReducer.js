import actionTypes from '../actions/writeArticleAction/actionTypes';
import initialState from './initialState';

const { createArticle } = initialState;

const {
  PUBLISH_LOADING,
  DRAFT_LOADING,
  PUBLISH_SUCCESS,
  PUBLISH_FAILURE,
  SAVE_AS_DRAFT_SUCCESS,
  SAVE_AS_DRAFT_FAILURE
} = actionTypes;

export default (state = createArticle, action) => {
  switch (action.type) {
    case PUBLISH_LOADING:
      return {
        ...state,
        articleIsLoading: true,
      };
    case DRAFT_LOADING:
      return {
        ...state,
        draftIsLoading: true,
      };
    case PUBLISH_SUCCESS:
      return {
        articleIsLoading: false,
        success: true,
        response: action.payload
      };
    case PUBLISH_FAILURE:
      return {
        articleIsLoading: false,
        success: false,
        response: action.payload
      };
    case SAVE_AS_DRAFT_SUCCESS:
      return {
        draftIsLoading: false,
        success: true,
        response: action.payload
      };
    case SAVE_AS_DRAFT_FAILURE:
      return {
        draftIsLoading: false,
        success: false,
        response: action.payload
      };
    default:
      return state;
  }
};
