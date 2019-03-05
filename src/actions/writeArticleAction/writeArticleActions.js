import { toast } from 'react-toastify';
import { createArticleCall } from '../../helpers/axiosHelper/writeArticle';
import actionTypes from './actionTypes';
import triggerLoading from '../authAction/loading';

const {
  DRAFT_LOADING,
  PUBLISH_LOADING,
  PUBLISH_SUCCESS,
  PUBLISH_FAILURE,
  SAVE_AS_DRAFT_SUCCESS,
  SAVE_AS_DRAFT_FAILURE
} = actionTypes;

export const publishArticleSuccess = payload => ({
  type: PUBLISH_SUCCESS,
  payload
});

export const publishArticleFailure = payload => ({
  type: PUBLISH_FAILURE,
  payload
});

export const publishArticle = article => async (dispatch) => {
  try {
    dispatch(triggerLoading(PUBLISH_LOADING));
    const response = await createArticleCall(article);
    dispatch(publishArticleSuccess(response));
    toast.success(response.data.message);
  } catch (error) {
    if (error.response) {
      dispatch(publishArticleFailure(error.response));
      toast.error(error.response.data.message);
    }
  }
};

export const draftArticleSuccess = payload => ({
  type: SAVE_AS_DRAFT_SUCCESS,
  payload
});

export const draftArticleFailure = payload => ({
  type: SAVE_AS_DRAFT_FAILURE,
  payload
});

export const draftArticle = article => async (dispatch) => {
  try {
    dispatch(triggerLoading(DRAFT_LOADING));
    const response = await createArticleCall(article);
    dispatch(draftArticleSuccess(response));
    toast.success(response.data.message);
  } catch (error) {
    if (error.response) {
      dispatch(draftArticleFailure(error.response));
      toast.error(error.response.data.message);
    }
  }
};
