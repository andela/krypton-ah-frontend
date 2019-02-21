import writeArticleCall from '../../helpers/axiosHelper/writeArticle';
import actionTypes from './actionTypes';
import triggerLoading from '../authAction/loading';

const {
  ARTICLE_LOADING,
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
    dispatch(triggerLoading(ARTICLE_LOADING));
    const response = await writeArticleCall(article);
    dispatch(publishArticleSuccess(response));
  } catch (error) {
    if (error.response) {
      console.log(error.response);
      dispatch(publishArticleFailure(error.response));
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
    dispatch(triggerLoading(ARTICLE_LOADING));
    const response = await writeArticleCall(article);
    dispatch(draftArticleSuccess(response));
  } catch (error) {
    if (error.response) {
      dispatch(draftArticleFailure(error.response));
    }
  }
};
