import actionTypes from '../actions/articleReactionsAction/actionTypes';
import initialState from './initialState';

const { ARTICLE_REACTION_SUCCESS } = actionTypes;

const { articleReaction } = initialState;

export default (state = articleReaction, action) => {
  switch (action.type) {
    case ARTICLE_REACTION_SUCCESS:
      return {
        success: true,
        newReaction: action.payload
      };
    default:
      return state;
  }
};
