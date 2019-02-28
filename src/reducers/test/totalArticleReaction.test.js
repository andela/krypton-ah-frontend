import actionTypes from '../../actions/articleReactionsAction/actionTypes';
import initialState from '../initialState';
import totalArticleReactionReducer from '../totalArticleReactionReducer';

const payload = {
  data: {
    dislikes: 1,
    likes: 1
  }
};

const error = {
  success: false,
  message: 'Value must be a UUID'
};

const { TOTAL_REACTIONS_FAILURE, TOTAL_REACTIONS_LOADING, TOTAL_REACTIONS_SUCCESS } = actionTypes;

describe('read article reducer', () => {
  it('should return the initial state', () => {
    expect(totalArticleReactionReducer(undefined, {})).toEqual(initialState.totalArticleReactions);
  });

  it('should update state when the start action is dispatched', () => {
    expect(
      totalArticleReactionReducer(initialState.totalArticleReactions, {
        type: TOTAL_REACTIONS_LOADING
      })
    ).toEqual(
      (initialState,
      {
        totalReactionsLoading: true,
        success: false,
        successResponse: {},
        failureResponse: {}
      })
    );
  });
});

it('should update state when the TOTAL_REACTIONS_SUCCESS action is dispatched', () => {
  expect(
    totalArticleReactionReducer(initialState.totalArticleReactions, {
      type: TOTAL_REACTIONS_SUCCESS,
      payload
    })
  ).toEqual(
    (initialState,
    {
      totalReactionsLoading: false,
      success: true,
      successResponse: payload.data,
      failureResponse: {}
    })
  );
});

it('should update state when the TOTAL_REACTIONS_FAILURE action is dispatched', () => {
  expect(
    totalArticleReactionReducer(initialState.totalArticleReactions, {
      type: TOTAL_REACTIONS_FAILURE,
      payload: error
    })
  ).toEqual(
    (initialState,
    {
      totalReactionsLoading: false,
      success: false,
      failureResponse: error.message,
      successResponse: {}
    })
  );
});
