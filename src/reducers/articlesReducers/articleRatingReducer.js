import actionTypes from '../../actions/articleRatingActions/actionTypes';
import initialState from '../initialState';

const {
  CREATE_ARTICLE_RATING_LOADING,
  CREATE_ARTICLE_RATING_SUCCESS,
  CREATE_ARTICLE_RATING_FAILURE,
  GET_USER_RATING_LOADING,
  GET_USER_RATING_SUCCESS,
  GET_USER_RATING_FAILURE
} = actionTypes;

const { getArticleRating, createArticleRating } = initialState;

export const getRating = (state = getArticleRating, action) => {
  switch (action.type) {
    case GET_USER_RATING_LOADING:
      return {
        ...state,
        ArticleRatingLoading: true
      };
    case GET_USER_RATING_SUCCESS:
      return {
        ...state,
        ArticleRatingLoading: false,
        success: true,
        successResponse: action.payload
      };
    case GET_USER_RATING_FAILURE:
      return {
        ...state,
        ArticleRatingLoading: false,
        success: false,
        failureResponse: action.payload
      };
    default:
      return state;
  }
};

export const createRating = (state = createArticleRating, action) => {
  switch (action.type) {
    case CREATE_ARTICLE_RATING_LOADING:
      return {
        ...state,
        ArticleRatingLoading: true
      };
    case CREATE_ARTICLE_RATING_SUCCESS:
      return {
        ...state,
        ArticleRatingLoading: false,
        success: true,
        successResponse: action.payload
      };
    case CREATE_ARTICLE_RATING_FAILURE:
      return {
        ...state,
        ArticleRatingLoading: false,
        success: false,
        failureResponse: action.payload
      };
    default:
      return state;
  }
};
