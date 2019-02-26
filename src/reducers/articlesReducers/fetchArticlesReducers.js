import actionTypes from '../../actions/fetchArticlesAction/actionTypes';
import initialState from '../initialState';

const {
  FETCH_POPULAR_ARTICLES_SUCCESS,
  FETCH_TRENDING_ARTICLES_SUCCESS,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_TAGS_SUCCESS,
  FETCH_FEATURED_ARTICLES_SUCCESS,
  FETCH_POPULAR_ARTICLES_FAILURE,
  FETCH_TRENDING_ARTICLES_FAILURE,
  FETCH_CATEGORIES_FAILURE,
  FETCH_TAGS_FAILURE,
  FETCH_FEATURED_ARTICLES_FAILURE
} = actionTypes;

const { Articles } = initialState;

export default (state = Articles, action) => {
  switch (action.type) {
    case FETCH_TAGS_SUCCESS:
      return {
        ...state,
        success: true,
        tagsResponse: action.payload.data
      };
    case FETCH_TAGS_FAILURE:
      return {
        ...state,
        tagsResponse: action.payload.data.message,
        tagsResponsefailure: true
      };
    case FETCH_POPULAR_ARTICLES_SUCCESS:
      return {
        ...state,
        success: true,
        popularArticlesResponse: action.payload.data.data
      };
    case FETCH_POPULAR_ARTICLES_FAILURE:
      return {
        ...state,
        popularArticlesResponse: action.payload.data.message,
        popularArticlesResponsefailure: true
      };
    case FETCH_TRENDING_ARTICLES_SUCCESS:
      return {
        ...state,
        success: true,
        trendingArticlesResponse: action.payload.data
      };
    case FETCH_TRENDING_ARTICLES_FAILURE:
      return {
        ...state,
        trendingArticlesResponse: action.payload.data.message,
        trendingArticlesResponsefailure: true
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        success: true,
        categoriesResponse: action.payload.data
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        categoriesResponse: action.payload.data.message,
        categoriesResponsefailure: true
      };
    case FETCH_FEATURED_ARTICLES_SUCCESS:
      return {
        ...state,
        success: true,
        featuredArticlesResponse: action.payload.data
      };
    case FETCH_FEATURED_ARTICLES_FAILURE:
      return {
        ...state,
        featuredArticlesResponse: action.payload.data.message,
        featuredArticlesfailure: true
      };
    default:
      return state;
  }
};
