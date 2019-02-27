import { fetchComment, commentLike } from '../../helpers/axiosHelper/commentRequests';
import actionTypes from './actionTypes';

const comments = payload => ({
  type: actionTypes.COMMENT_FETCHED,
  payload
});

const threads = payload => ({
  type: actionTypes.THREADS_FETCHED,
  payload
});

const commentLoading = () => ({
  type: actionTypes.COMMENT_LOADING
});

const failed = payload => ({
  type: actionTypes.COMMENT_LOADING,
  payload
});

const likeComment = payload => ({
  type: actionTypes.COMMENT_LIKED_FETCHED,
  payload
});
const getComments = (articleId, mainCommentId) => async (dispatch) => {
  try {
    dispatch(commentLoading());
    const res = await fetchComment(articleId, mainCommentId);
    if (res.threads) {
      dispatch(threads(res.threads));
    } else {
      dispatch(comments(res));
    }
  } catch (error) {
    dispatch(failed(error.res));
  }
};

const getCommentLikes = () => async (dispatch) => {
  try {
    const res = await commentLike();
    dispatch(likeComment(res));
  } catch (error) {
    dispatch(failed(error.res));
  }
};

export {
  comments,
  failed,
  getComments,
  getCommentLikes
};
