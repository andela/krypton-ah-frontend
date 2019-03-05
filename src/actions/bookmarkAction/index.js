import { toast } from 'react-toastify';
import { createBookmark, removeBookmark } from '../../helpers/axiosHelper/bookmark';
import actionTypes from '../readArticleAction/actionTypes';

const { TOGGLE_ARTICLE_BOOKMARK } = actionTypes;

export const bookmarkSuccess = () => ({
  type: TOGGLE_ARTICLE_BOOKMARK
});

export const bookmarkedAction = bookmarkDetail => async (dispatch) => {
  try {
    const response = await createBookmark(bookmarkDetail);
    dispatch(bookmarkSuccess());
    toast.success(response.data.message);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const removeBookmarkSuccess = () => ({
  type: TOGGLE_ARTICLE_BOOKMARK
});

export const removeBookmarkAction = bookmarkDetail => async (dispatch) => {
  try {
    const response = await removeBookmark(bookmarkDetail);
    dispatch(removeBookmarkSuccess());
    toast.success(response.data.message);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
