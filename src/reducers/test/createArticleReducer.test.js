import actionTypes from '../../actions/writeArticleAction/actionTypes';
import initialState from '../initialState';
import createArticleReducer from '../createArticleReducer';
import { publishArticleOkResponse, publishArticleBadResponse } from '../../mockData/index';

const {
  PUBLISH_LOADING,
  DRAFT_LOADING,
  PUBLISH_SUCCESS,
  PUBLISH_FAILURE,
  SAVE_AS_DRAFT_SUCCESS,
  SAVE_AS_DRAFT_FAILURE
} = actionTypes;

describe('user authentication reducer', () => {
  it('should return the initial state', () => {
    expect(createArticleReducer(undefined, {})).toEqual(initialState.createArticle);
  });

  it('should update state when the start action is dispatched', () => {
    expect(createArticleReducer(initialState.createArticle, { type: PUBLISH_LOADING })).toEqual(
      (initialState,
      {
        articleIsLoading: true,
        draftIsLoading: false,
        success: false,
        response: ''
      })
    );
  });

  it('should update state when the start action is dispatched', () => {
    expect(createArticleReducer(initialState.createArticle, { type: DRAFT_LOADING })).toEqual(
      (initialState,
      {
        articleIsLoading: false,
        draftIsLoading: true,
        success: false,
        response: ''
      })
    );
  });

  it('should update state when the PUBLISH_SUCCESS action is dispatched', () => {
    const payload = publishArticleOkResponse;
    expect(
      createArticleReducer(initialState.createArticle, {
        type: PUBLISH_SUCCESS,
        payload
      })
    ).toEqual(
      (initialState,
      {
        articleIsLoading: false,
        success: true,
        response: payload.data.message
      })
    );
  });

  it('should update state when the PUBLISH_FAILURE action is dispatched', () => {
    const payload = publishArticleBadResponse;
    expect(
      createArticleReducer(initialState.createArticle, {
        type: PUBLISH_FAILURE,
        payload
      })
    ).toEqual(
      (initialState,
      {
        articleIsLoading: false,
        success: false,
        response: payload.data.message
      })
    );
  });

  it('should update state when the SAVE_AS_DRAFT_SUCCESS action is dispatched', () => {
    const payload = publishArticleOkResponse;
    expect(
      createArticleReducer(initialState.createArticle, {
        type: SAVE_AS_DRAFT_SUCCESS,
        payload
      })
    ).toEqual(
      (initialState,
      {
        draftIsLoading: false,
        success: true,
        response: payload.data.message
      })
    );
  });

  it('should update state when the SAVE_AS_DRAFT_FAILURE action is dispatched', () => {
    const payload = publishArticleBadResponse;
    expect(
      createArticleReducer(initialState.createArticle, {
        type: SAVE_AS_DRAFT_FAILURE,
        payload
      })
    ).toEqual(
      (initialState,
      {
        draftIsLoading: false,
        success: false,
        response: payload.data.message
      })
    );
  });
});
