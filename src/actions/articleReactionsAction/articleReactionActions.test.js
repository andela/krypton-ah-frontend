import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from './index';
import actionTypes from './actionTypes';
import axios from '../../helpers/axiosHelper/totalArticleReactions';
import helper from '../../helpers/axiosHelper/updateArticleReaction';
import { articleId, totalReactions as payload } from '../../mockData/readArticle';
import { error, reactionType, validReaction } from '../../mockData/articleReactions';

const {
  TOTAL_REACTIONS_FAILURE,
  TOTAL_REACTIONS_LOADING,
  TOTAL_REACTIONS_SUCCESS,
  ARTICLE_REACTION_SUCCESS
} = actionTypes;

const mockStore = configureStore([thunk]);
const store = mockStore({ totalReactions: {} });
const dispatch = jest.fn();

describe('actions to fetch number of likes and dislikes', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    store.clearActions();
    dispatch.mockRestore();
    moxios.uninstall();
  });

  it('should return an action type TOTAL_REACTIONS_SUCCESS when the operation is successful', () => {
    expect(actions.totalReactionsSuccess(payload)).toEqual({
      type: TOTAL_REACTIONS_SUCCESS,
      payload: payload.data
    });
  });

  it('should return an action type TOTAL_REACTIONS_FAILURE when the operation is unsuccessful', () => {
    expect(actions.totalReactionsFailure(error.response)).toEqual({
      type: TOTAL_REACTIONS_FAILURE,
      payload: error.response.data
    });
  });

  it('should trigger an initial loading action when called', () => {
    axios.getNumberOfReactions = jest.fn().mockResolvedValue(payload);
    actions.getTotalReactions(articleId)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: TOTAL_REACTIONS_LOADING });
  });

  it('should dispatch success action type and response as payload', async () => {
    axios.getNumberOfReactions = jest.fn().mockResolvedValue(payload);
    await actions.getTotalReactions(articleId)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({
      type: TOTAL_REACTIONS_SUCCESS,
      payload: payload.data
    });
  });

  it('should return an action type ARTICLE_REACTION_SUCCESS when the operation is successful', () => {
    expect(actions.articleReactionSuccess(reactionType)).toEqual({
      type: ARTICLE_REACTION_SUCCESS,
      payload: reactionType
    });
  });
  it('should dispatch success action type and response as payload', async () => {
    helper.updateArticleReaction = jest.fn().mockResolvedValue(validReaction);
    await actions.articleReaction(articleId, reactionType)(dispatch);
    expect(dispatch).toBeCalledTimes(1);
    expect(dispatch).toBeCalledWith({
      type: ARTICLE_REACTION_SUCCESS,
      payload: reactionType
    });
  });
});
