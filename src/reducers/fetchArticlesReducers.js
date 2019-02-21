import actionTypes from '../actions/articlesAction/actionTypes';
import initialState from './initialState';

const {
  FETCH_POPULAR_ARTICLES,
  FETCH_TRENDING_ARTICLES,
  FETCH_CATEGORIES,
  FETCH_TAGS,
  FETCH_FEATURED_ARTICLES,
  FETCH_POPULAR_ARTICLES_FAILURE,
  FETCH_TRENDING_ARTICLES_FAILURE,
  FETCH_CATEGORIES_FAILURE,
  FETCH_TAGS_FAILURE,
  FETCH_FEATURED_ARTICLES_FAILURE
} = actionTypes;

const { Articles } = initialState;

export default (state = Articles, action) => {
  switch (action.type) {
    case FETCH_POPULAR_ARTICLES:
      return {
        ...state,
        popularArticlesLoading: false,
        success: true,
        popularresponse: action.payload.data
      };
    case FETCH_TRENDING_ARTICLES:
      return {
        ...state,
        trendingArticlesLoading: false,
        success: true,
        trendingresponse: action.payload.data
      };
    case FETCH_CATEGORIES:
      return {
        ...state,
        categoriesLoading: false,
        success: true,
        categoriesresponse: action.payload.data
      };
    case FETCH_TAGS:
      return {
        ...state,
        tagsArticlesLoading: false,
        success: true,
        tagsresponse: action.payload.data
      };
    case FETCH_FEATURED_ARTICLES:
      return {
        ...state,
        featuredArticlesLoading: false,
        success: true,
        featuredarticles: action.payload.data
      };
    case FETCH_POPULAR_ARTICLES_FAILURE:
      return {
        ...state,
        popularresponse: action.payload.message
      };
    case FETCH_TRENDING_ARTICLES_FAILURE:
      return {
        ...state,
        trendingresponse: action.payload.message
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        categoriesresponse: action.payload.message
      };
    case FETCH_TAGS_FAILURE:
      return {
        ...state,
        tagsresponse: action.payload.message
      };
    case FETCH_FEATURED_ARTICLES_FAILURE:
      return {
        ...state,
        featuredarticles: action.payload.message
      };
    default:
      return state;
  }
};
