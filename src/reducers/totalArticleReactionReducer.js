import actionTypes from '../actions/articleReactionsAction/actionTypes';
import initialState from './initialState';

const { TOTAL_REACTIONS_FAILURE, TOTAL_REACTIONS_LOADING, TOTAL_REACTIONS_SUCCESS } = actionTypes;

const { totalArticleReactions } = initialState;

export default (state = totalArticleReactions, action) => {
  switch (action.type) {
    case TOTAL_REACTIONS_LOADING:
      return {
        ...state,
        totalReactionsLoading: true
      };
    case TOTAL_REACTIONS_SUCCESS:
      return {
        ...state,
        totalReactionsLoading: false,
        success: true,
        successResponse: action.payload.data
      };
    case TOTAL_REACTIONS_FAILURE:
      return {
        ...state,
        totalReactionsLoading: false,
        success: false,
        failureResponse: action.payload.message
      };

    default:
      return state;
  }
};
