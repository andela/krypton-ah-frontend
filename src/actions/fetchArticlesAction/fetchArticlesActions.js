import '@babel/polyfill';
import {
  fetchPopularArticles,
  fetchCategories,
  fetchTags,
  fetchFeaturedArticles
} from '../../helpers/axiosHelper/articlesAxiosCalls';
import actionTypes from './actionTypes';

const {
  FETCH_POPULAR_ARTICLES_SUCCESS,
  FETCH_POPULAR_ARTICLES_FAILURE,
  FETCH_TRENDING_ARTICLES_SUCCESS,
  FETCH_TRENDING_ARTICLES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_FAILURE,
  FETCH_FEATURED_ARTICLES_SUCCESS,
  FETCH_FEATURED_ARTICLES_FAILURE
} = actionTypes;

export const fetchpopularSuccess = payload => ({
  type: FETCH_POPULAR_ARTICLES_SUCCESS,
  payload
});

export const fetchfeaturedSuccess = payload => ({
  type: FETCH_FEATURED_ARTICLES_SUCCESS,
  payload
});

export const fetchtrendingSuccess = payload => ({
  type: FETCH_TRENDING_ARTICLES_SUCCESS,
  payload
});

export const fetchTagsSuccess = payload => ({
  type: FETCH_TAGS_SUCCESS,
  payload
});

export const fetchCategoriesSuccess = payload => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload
});

export const fetchPopularFailure = payload => ({
  type: FETCH_POPULAR_ARTICLES_FAILURE,
  payload
});

export const fetchFeaturedFailure = payload => ({
  type: FETCH_FEATURED_ARTICLES_FAILURE,
  payload
});

export const fetchTrendingFailure = payload => ({
  type: FETCH_TRENDING_ARTICLES_FAILURE,
  payload
});

export const fetchTagsFailure = payload => ({
  type: FETCH_TAGS_FAILURE,
  payload
});

export const fetchCategoriesFailure = payload => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload
});

export const fetchpopular = () => async (dispatch) => {
  try {
    const response = await fetchPopularArticles();
    dispatch(fetchpopularSuccess(response));
    dispatch(fetchtrendingSuccess(response));
  } catch (error) {
    if (error.response) {
      dispatch(fetchPopularFailure(error.response));
      dispatch(fetchTrendingFailure(error.response));
    }
    return error;
  }
};

export const fetchfeatured = () => async (dispatch) => {
  try {
    const response = await fetchFeaturedArticles();
    dispatch(fetchfeaturedSuccess(response));
  } catch (error) {
    if (error.response) {
      dispatch(fetchFeaturedFailure(error.response));
    }
    return error;
  }
};

export const fetchcategories = () => async (dispatch) => {
  try {
    const response = await fetchCategories();
    dispatch(fetchCategoriesSuccess(response));
  } catch (error) {
    if (error.response) {
      dispatch(fetchCategoriesFailure(error.response));
    }
    return error;
  }
};

export const fetchtags = () => async (dispatch) => {
  try {
    const response = await fetchTags();
    dispatch(fetchTagsSuccess(response));
  } catch (error) {
    if (error.response) {
      dispatch(fetchTagsFailure(error.response));
    }
    return error;
  }
};
