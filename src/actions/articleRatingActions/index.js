import { toast } from 'react-toastify';
import actionTypes from './actionTypes';
import { getUserRating, createRating } from '../../helpers/axiosHelper/articleRating';
import triggerLoading from '../authAction/loading';

const {
  CREATE_ARTICLE_RATING_LOADING,
  CREATE_ARTICLE_RATING_SUCCESS,
  CREATE_ARTICLE_RATING_FAILURE,
  GET_USER_RATING_LOADING,
  GET_USER_RATING_SUCCESS,
  GET_USER_RATING_FAILURE
} = actionTypes;

const createRatingSuccess = payload => ({
  type: CREATE_ARTICLE_RATING_SUCCESS,
  payload: payload.data
});

const createRatingFailure = payload => ({
  type: CREATE_ARTICLE_RATING_FAILURE,
  payload: payload.data
});

const getUserRatingSuccess = payload => ({
  type: GET_USER_RATING_SUCCESS,
  payload: payload.data
});

const getUserRatingFailure = payload => ({
  type: GET_USER_RATING_FAILURE,
  payload: payload.data
});

const createArticleRating = ratingdetails => async (dispatch) => {
  try {
    dispatch(triggerLoading(CREATE_ARTICLE_RATING_LOADING));
    const response = await createRating(ratingdetails);
    dispatch(createRatingSuccess(response));
    toast.success(response.data.message);
  } catch (error) {
    dispatch(createRatingFailure(error.response));
  }
};

const getUserArticleRating = articleId => async (dispatch) => {
  try {
    dispatch(triggerLoading(GET_USER_RATING_LOADING));
    const response = await getUserRating(articleId);
    dispatch(getUserRatingSuccess(response));
  } catch (error) {
    dispatch(getUserRatingFailure(error.response));
  }
};

export {
  createArticleRating,
  getUserArticleRating,
  createRatingSuccess,
  createRatingFailure,
  getUserRatingSuccess,
  getUserRatingFailure
};
