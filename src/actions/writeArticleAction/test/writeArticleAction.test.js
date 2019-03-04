/* eslint-disable no-throw-literal */
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from '../writeArticleActions';
import actionTypes from '../actionTypes';
import * as axios from '../../../helpers/axiosHelper/writeArticle';
// import verify from '../../../helpers/axiosHelper/writeArticle';
// import NETWORK_ERROR from '../../networkError/actionType';
import {
  payload,
  // articlePayload,
  draftArticleOkResponse,
  // draftArticlePayload,
  publishArticleBadResponse,
  publishArticleOkResponse,
  mockArticleResponse
} from '../../../mockData/index';

const mockStore = configureStore([thunk]);
const store = mockStore({ createArticle: {} });
const dispatch = jest.fn();

describe('user authentication actions Signup', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    store.clearActions();
    dispatch.mockRestore();
    moxios.uninstall();
  });
  afterAll(dispatch.mockRestore);
  it(`should return an action object once ${actionTypes.PUBLISH_SUCCESS} is fired`, () => {
    expect(actions.publishArticleSuccess(payload)).toEqual({
      type: actionTypes.PUBLISH_SUCCESS,
      payload
    });
  });
  it(`should return an action object once ${actionTypes.PUBLISH_FAILURE} is fired`, () => {
    expect(actions.publishArticleFailure(payload)).toEqual({
      type: actionTypes.PUBLISH_FAILURE,
      payload
    });
  });
  it(`should return an action object once ${actionTypes.SAVE_AS_DRAFT_SUCCESS} is fired`, () => {
    expect(actions.draftArticleSuccess(payload)).toEqual({
      type: actionTypes.SAVE_AS_DRAFT_SUCCESS,
      payload
    });
  });
  it(`should return an action object once ${actionTypes.SAVE_AS_DRAFT_FAILURE} is fired`, () => {
    expect(actions.draftArticleFailure(payload)).toEqual({
      type: actionTypes.SAVE_AS_DRAFT_FAILURE,
      payload
    });
  });

  it('should call the publish article success dispatch function', () => {
    axios.createArticleCall = jest.fn().mockResolvedValue(mockArticleResponse);
    actions.publishArticle(payload)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: actionTypes.PUBLISH_LOADING });
  });

  it('should call the save article as draft success dispatch function', () => {
    axios.createArticleCall = jest.fn().mockResolvedValue(mockArticleResponse);
    actions.draftArticle(payload)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: actionTypes.DRAFT_LOADING });
  });

  it('should call the create article success dispatch function', async () => {
    axios.createArticleCall = jest.fn().mockResolvedValue(publishArticleOkResponse);
    await actions.publishArticle(payload)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({
      type: actionTypes.PUBLISH_SUCCESS,
      payload: publishArticleOkResponse
    });
    store.clearActions();
  });

  it('should call the create article failure dispatch function', async () => {
    axios.createArticleCall = jest.fn(() => {
      throw { response: publishArticleBadResponse };
    });
    try {
      await actions.publishArticle(payload)(dispatch);
    } catch (error) {
      expect(dispatch).toBeCalledTimes(2);
      expect(dispatch).toBeCalledWith({
        type: actionTypes.PUBLISH_FAILURE,
        payload: publishArticleBadResponse
      });
    }
    store.clearActions();
  });

  it('should call the create save article as draft success dispatch function', async () => {
    axios.createArticleCall = jest.fn().mockResolvedValue(draftArticleOkResponse);
    await actions.draftArticle(payload)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({
      type: actionTypes.SAVE_AS_DRAFT_SUCCESS,
      payload: draftArticleOkResponse
    });
    store.clearActions();
  });

  it('should call the create save article as draft failure dispatch function', async () => {
    axios.createArticleCall = jest.fn(() => {
      throw { response: publishArticleBadResponse };
    });
    try {
      await actions.draftArticle(payload)(dispatch);
    } catch (error) {
      expect(dispatch).toBeCalledTimes(2);
      expect(dispatch).toBeCalledWith({
        type: actionTypes.SAVE_AS_DRAFT_FAILURE,
        payload: publishArticleBadResponse
      });
    }
    store.clearActions();
  });
});
