import actionTypes from './actionTypes';
import axiosHelper from '../../helpers/axiosHelper/getArticle';
import triggerLoading from '../authAction/loading';

const { READ_ARTICLE_LOADING, READ_ARTICLE_SUCCESS, READ_ARTICLE_FAILURE } = actionTypes;

const getArticleSuccess = payload => ({
  type: READ_ARTICLE_SUCCESS,
  payload: payload.data
});

const getArticleFailure = payload => ({
  type: READ_ARTICLE_FAILURE,
  payload: payload.response
});

const getArticle = articleId => async (dispatch) => {
  try {
    dispatch(triggerLoading(READ_ARTICLE_LOADING));
    const response = await axiosHelper.getAnArticle(articleId);
    dispatch(getArticleSuccess(response));
  } catch (error) {
    dispatch(getArticleFailure(error));
  }
};

export { getArticle, getArticleSuccess, getArticleFailure };
