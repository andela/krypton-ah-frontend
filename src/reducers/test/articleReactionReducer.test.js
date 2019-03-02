import actionTypes from '../../actions/articleReactionsAction/actionTypes';
import initialState from '../initialState';
import articleReactionsReducer from '../articleReactionsReducer';

const { ARTICLE_REACTION_SUCCESS } = actionTypes;

describe(' article reaction reducer', () => {
  it('should return the initial state', () => {
    expect(articleReactionsReducer(undefined, {})).toEqual(initialState.articleReaction);
  });

  it('should update state when the start action is dispatched', () => {
    const action = {
      payload: 'dislike'
    };
    expect(
      articleReactionsReducer(initialState.articleReaction, {
        type: ARTICLE_REACTION_SUCCESS,
        payload: 'dislike'
      })
    ).toEqual(
      (initialState,
      {
        success: true,
        newReaction: action.payload
      })
    );
  });
});
