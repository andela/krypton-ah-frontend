import { fetchComment } from '../../helpers/axiosHelper/commentRequests';
import actionTypes from './actionTypes';

const comments = payload => ({
  type: actionTypes.COMMENT_FETCHED,
  payload
});

const failed = payload => ({
  type: actionTypes.COMMENT_LOADING,
  payload
});

const getComments = (articleId, mainCommentId) => async (dispatch) => {
  try {
    const res = await fetchComment(articleId, mainCommentId);
    dispatch(comments(res.data.data));
  } catch (error) {
    dispatch(failed(error.res));
  }
};

export {
  comments,
  failed,
  getComments
};
