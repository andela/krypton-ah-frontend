import { toast } from 'react-toastify';
import actionTypes from './actionTypes';
import axios from '../../helpers/axiosHelper/updateArticleReaction';
import axiosHelper from '../../helpers/axiosHelper/totalArticleReactions';
import triggerLoading from '../authAction/loading';
import { PLEASE_SIGN_IN } from '../../constants';

const {
  TOTAL_REACTIONS_FAILURE,
  TOTAL_REACTIONS_LOADING,
  TOTAL_REACTIONS_SUCCESS,
  ARTICLE_REACTION_SUCCESS
} = actionTypes;

const totalReactionsSuccess = payload => ({
  type: TOTAL_REACTIONS_SUCCESS,
  payload: payload.data
});

const totalReactionsFailure = payload => ({
  type: TOTAL_REACTIONS_FAILURE,
  payload: payload.data
});

const getTotalReactions = articleId => async (dispatch) => {
  try {
    dispatch(triggerLoading(TOTAL_REACTIONS_LOADING));
    const response = await axiosHelper.getNumberOfReactions(articleId);
    dispatch(totalReactionsSuccess(response));
  } catch (error) {
    dispatch(totalReactionsFailure(error.response));
  }
};

const articleReactionSuccess = reactionType => ({
  type: ARTICLE_REACTION_SUCCESS,
  payload: reactionType
});

const articleReaction = (articleId, reactionType) => async (dispatch) => {
  try {
    await axios.updateArticleReaction(articleId, reactionType);
    dispatch(articleReactionSuccess(reactionType));
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
export {
  getTotalReactions,
  totalReactionsFailure,
  totalReactionsSuccess,
  articleReaction,
  articleReactionSuccess
};
