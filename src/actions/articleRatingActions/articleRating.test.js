/* eslint-disable no-throw-literal */
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import { createArticleRating,
  getUserArticleRating,
  createRatingSuccess,
  createRatingFailure,
  getUserRatingSuccess,
  getUserRatingFailure } from './index';
import actionTypes from './actionTypes';
import * as axios from '../../helpers/axiosHelper/articleRating';
import { articleId, totalReactions as payload } from '../../mockData/readArticle';

const errorData = {
  response: {
    data: { success: false, message: 'id must be a UUID' }
  }
};


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

  it('should return an action typeCREATE_ARTICLE_RATING_SUCCESS when the operation is successful', () => {
    expect(createRatingSuccess(payload)).toEqual({
      type: actionTypes.CREATE_ARTICLE_RATING_SUCCESS,
      payload: payload.data
    });
  });

  it('should return an action type TOTAL_REACTIONS_FAILURE when the operation is unsuccessful', () => {
    expect(createRatingFailure(errorData.response)).toEqual({
      type: actionTypes.CREATE_ARTICLE_RATING_FAILURE,
      payload: errorData.response.data
    });
  });

  it('should return an action typeCREATE_ARTICLE_RATING_SUCCESS when the operation is successful', () => {
    expect(getUserRatingSuccess(payload)).toEqual({
      type: actionTypes.GET_USER_RATING_SUCCESS,
      payload: payload.data
    });
  });

  it('should return an action type TOTAL_REACTIONS_FAILURE when the operation is unsuccessful', () => {
    expect(getUserRatingFailure(errorData.response)).toEqual({
      type: actionTypes.GET_USER_RATING_FAILURE,
      payload: errorData.response.data
    });
  });

  it('should trigger an initial loading action when called', () => {
    axios.createRating = jest.fn().mockResolvedValue(payload);
    createArticleRating(articleId)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: actionTypes.CREATE_ARTICLE_RATING_LOADING });
  });

  it('should trigger an initial loading action when called', () => {
    axios.getUserRating = jest.fn().mockResolvedValue(payload);
    getUserArticleRating(articleId)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: actionTypes.GET_USER_RATING_LOADING });
  });

  it('should throw error', async () => {
    axios.createRating = jest.fn(() => {
      throw { response: 'hello' };
    });
    try {
      await createArticleRating(payload)(dispatch);
    } catch (error) {
      expect(error).toEqual({ response: 'hello' });
    }
    expect(dispatch).toBeCalledTimes(2);
    store.clearActions();
  });

  it('should throw error', async () => {
    axios.createRating = jest.fn(() => {
      throw { response: errorData };
    });
    try {
      await createArticleRating(payload)(dispatch);
    } catch (error) {
      expect(error).toEqual({ response: errorData });
    }
    expect(dispatch).toBeCalledTimes(2);
    store.clearActions();
  });

  it('should throw error', async () => {
    axios.getUserRating = jest.fn(() => {
      throw { response: errorData };
    });
    try {
      await getUserArticleRating(payload)(dispatch);
    } catch (error) {
      expect(error).toEqual({ response: errorData });
    }
    expect(dispatch).toBeCalledTimes(2);
    store.clearActions();
  });
});
