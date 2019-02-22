import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from '../index';
import actionTypes from '../actionTypes';
import * as axios from '../../../helpers/axiosHelper/user';
import { error, getUserSuccessResponse, getUserFailureResponse } from '../../../mockData';

const {
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} = actionTypes;

const mockStore = configureStore([thunk]);
const store = mockStore({ user: {} });
const dispatch = jest.fn();

describe('userActions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    store.clearActions();
    dispatch.mockRestore();
    moxios.uninstall();
  });
  it('should get user', async () => {
    axios.getUser = jest.fn().mockResolvedValue(getUserSuccessResponse);
    await actions.fetchUser({}, true)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({
      type: FETCH_USER_SUCCESS,
      payload: getUserSuccessResponse.data.data
    });
  });

  it('should not get user', async () => {
    axios.getUser = jest.fn().mockResolvedValue(getUserFailureResponse);
    await actions.fetchUser({}, false)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenLastCalledWith({
      type: FETCH_USER_FAILURE
    });
  });

  it('should throw error with response', async () => {
    axios.getUser = jest.fn().mockRejectedValue(error);
    await actions.fetchUser({}, false)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenLastCalledWith({
      type: FETCH_USER_FAILURE
    });
  });

  it('should create user profile', async () => {
    axios.createProfile = jest.fn().mockResolvedValue(getUserSuccessResponse);
    await actions.updateUserProfile({}, true)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({
      type: UPDATE_USER_SUCCESS,
      payload: getUserSuccessResponse.data.data
    });
  });
  it('should update user profile', async () => {
    axios.updateProfile = jest.fn().mockResolvedValue(getUserSuccessResponse);
    await actions.updateUserProfile({}, false)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith({
      type: UPDATE_USER_SUCCESS,
      payload: getUserSuccessResponse.data.data
    });
  });

  it('should not update user profile', async () => {
    axios.updateProfile = jest.fn().mockResolvedValue(getUserFailureResponse);
    await actions.updateUserProfile({}, false)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenLastCalledWith({
      type: UPDATE_USER_FAILURE
    });
  });
  it('should throw error with response', async () => {
    axios.updateProfile = jest.fn().mockRejectedValue(error);
    await actions.updateUserProfile({}, false)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenLastCalledWith({
      type: UPDATE_USER_FAILURE
    });
  });
});
