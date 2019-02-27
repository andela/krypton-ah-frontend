import actionTypes from './actionTypes';
import axiosHelper from '../../helpers/axiosHelper/totalArticleReactions';
import triggerLoading from '../authAction/loading';

const { TOTAL_REACTIONS_FAILURE, TOTAL_REACTIONS_LOADING, TOTAL_REACTIONS_SUCCESS } = actionTypes;

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

export { getTotalReactions, totalReactionsFailure, totalReactionsSuccess };
