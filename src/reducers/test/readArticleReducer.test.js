import actionTypes from '../../actions/readArticleAction/actionTypes';
import initialState from '../initialState';
import readArticleReducer from '../readArticleReducer';
import { payload, error } from '../../mockData/readArticle';

const { READ_ARTICLE_FAILURE, READ_ARTICLE_LOADING, READ_ARTICLE_SUCCESS } = actionTypes;

describe('read article reducer', () => {
  it('should return the initial state', () => {
    expect(readArticleReducer(undefined, {})).toEqual(initialState.readArticle);
  });

  it('should update state when the start action is dispatched', () => {
    expect(readArticleReducer(initialState.readArticle, { type: READ_ARTICLE_LOADING })).toEqual(
      (initialState,
      {
        articleIsLoading: true,
        success: false,
        successResponse: {},
        failureResponse: {}
      })
    );
  });
});

it('should update state when the READ_ARTICLE_SUCCESS action is dispatched', () => {
  expect(
    readArticleReducer(initialState.readArticle, {
      type: READ_ARTICLE_SUCCESS,
      payload
    })
  ).toEqual(
    (initialState,
    {
      articleIsLoading: false,
      success: true,
      successResponse: payload.data,
      failureResponse: {}
    })
  );
});

it('should update state when the READ_ARTICLE_FAILURE action is dispatched', () => {
  expect(
    readArticleReducer(initialState.readArticle, {
      type: READ_ARTICLE_FAILURE,
      payload: error
    })
  ).toEqual(
    (initialState,
    {
      articleIsLoading: false,
      success: false,
      failureResponse: error.data,
      successResponse: {}
    })
  );
});
