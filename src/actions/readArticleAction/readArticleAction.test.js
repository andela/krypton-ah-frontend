import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from './index';
import actionTypes from './actionTypes';
import axios from '../../helpers/axiosHelper/getArticle';
import { payload, articleId, error } from '../../../__mocks__';

const { READ_ARTICLE_FAILURE, READ_ARTICLE_LOADING, READ_ARTICLE_SUCCESS } = actionTypes;

const mockStore = configureStore([thunk]);
const store = mockStore({ readArticle: {} });
const dispatch = jest.fn();

describe('actions for user to view an article', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    store.clearActions();
    dispatch.mockRestore();
    moxios.uninstall();
  });

  it('should return an action type READ_ARTICLE_SUCCESS when the operation is successful', () => {
    expect(actions.getArticleSuccess(payload)).toEqual({
      type: READ_ARTICLE_SUCCESS,
      payload: payload.data
    });
  });

  it('should return an action type READ_ARTICLE_FAILURE when the operation is unsuccessful', () => {
    expect(actions.getArticleFailure(error)).toEqual({
      type: READ_ARTICLE_FAILURE,
      payload: error.response
    });
  });

  it('should trigger an initial loading action when called', () => {
    axios.getAnArticle = jest.fn().mockResolvedValue(payload);
    actions.getArticle(articleId)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: READ_ARTICLE_LOADING });
  });

  it('should dispatch success action type and response as payload', async () => {
    axios.getAnArticle = jest.fn().mockResolvedValue(payload);
    await actions.getArticle(articleId)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({
      type: READ_ARTICLE_SUCCESS,
      payload: payload.data
    });
  });

  it('should return the READ_ARTICLE_FAILURE action when an error occurs', async () => {
    axios.getAnArticle = jest.fn(() => {
      throw new Error(error);
    });
    try {
      await actions.getArticle(error)(dispatch);
    } catch (err) {
      expect(err).toEqual(error);
    }
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({ type: READ_ARTICLE_FAILURE });
    store.clearActions();
  });
});
