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
  articlePayload,
  // draftArticleOkResponse,
  // draftArticlePayload,
  // publishArticleOkResponse,
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
  it('should call the signup success dispatch function', () => {
    axios.createArticleCall = jest.fn().mockResolvedValue(mockArticleResponse);
    actions.publishArticle(articlePayload)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: actionTypes.ARTICLE_LOADING });
  });

  // it('should return an action if authentication response status is 200', async () => {
  //   verify.createArticleCall = jest.fn();

  //   const expectedAction = [
  //     {
  //       payload: {},
  //       type: actions.SOCIAL_AUTH_SUCCESS
  //     }
  //   ];
  //   await store.dispatch(socialLogin(socialToken, twitterPath));
  //   expect(store.getActions()).toEqual(expectedAction);
  //   expect(verify.verifySocialAuth).not.toHaveBeenCalled();
  // });

  // it('should call the signup success dispatch function', async () => {
  //   axios.createArticleCall = jest.fn().mockResolvedValue(publishArticleOkResponse);
  //   await actions.publishArticle(articlePayload)(dispatch);
  //   // expect(dispatch).toBeCalledTimes(2);
  //   expect(dispatch).toBeCalledWith({
  //     type: actionTypes.PUBLISH_SUCCESS,
  //     payload: publishArticleOkResponse
  //   });
  // });

  // it('should call the signup success dispatch function', async () => {
  //   axios.createArticleCall = jest.fn().mockResolvedValue(publishArticleOkResponse);
  //   await actions.userSignUp(payload)(dispatch);
  //   expect(dispatch).toBeCalledTimes(2);
  //   expect(dispatch).toBeCalledWith({
  //     type: actionTypes.SIGNUP_SUCCESS,
  //     payload: signupOkResponse,
  //   });
  //   store.clearActions();
  // });
});
