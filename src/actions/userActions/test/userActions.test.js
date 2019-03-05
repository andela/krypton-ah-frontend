import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { toast } from 'react-toastify';
import sinon from 'sinon';
import moxios from 'moxios';
import * as actions from '../index';
import actionTypes from '../actionTypes';
import * as axios from '../../../helpers/axiosHelper/user';
import { error, getUserSuccessResponse, mockResponse } from '../../../mockData';
import { networkErrorResponse } from '../../../constants';

const {
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_CURRENT_USER_FAILURE
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
    sinon.restore();
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

  it('should throw error with response', async () => {
    axios.getUser = jest.fn().mockRejectedValue(error);
    await actions.fetchUser({}, false)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenLastCalledWith({
      type: FETCH_USER_FAILURE
    });
  });
  it('should call toast.warn', async () => {
    axios.getUser = jest.fn().mockRejectedValue(mockResponse);
    const warnStub = sinon.stub(toast, 'warn');
    await actions.fetchUser({}, false)(dispatch);
    expect(dispatch).toBeCalledTimes(1);
    expect(warnStub.calledOnceWithExactly(networkErrorResponse)).toBe(true);
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
  it('should throw error with response', async () => {
    axios.updateProfile = jest.fn().mockRejectedValue(error);
    await actions.updateUserProfile({}, false)(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenLastCalledWith({
      type: UPDATE_USER_FAILURE
    });
  });
  it('should call toast.warn', async () => {
    axios.updateProfile = jest.fn().mockRejectedValue(mockResponse);
    const warnStub = sinon.stub(toast, 'warn');
    await actions.updateUserProfile({}, false)(dispatch);
    expect(dispatch).toBeCalledTimes(1);
    expect(warnStub.calledOnceWithExactly(networkErrorResponse)).toBe(true);
  });

  it('should get currentUser', async () => {
    axios.getUser = jest.fn().mockResolvedValue(getUserSuccessResponse);
    await actions.fetchCurrentUser()(dispatch);
    expect(dispatch).toBeCalledTimes(2);
  });

  it('should throw error with response', async () => {
    axios.getUser = jest.fn().mockRejectedValue(error);
    await actions.fetchCurrentUser()(dispatch);
    expect(dispatch).toBeCalledTimes(1);
    expect(dispatch).toHaveBeenLastCalledWith({
      type: FETCH_CURRENT_USER_FAILURE
    });
  });
  it('should call toast.warn', async () => {
    axios.getUser = jest.fn().mockRejectedValue(mockResponse);
    const warnStub = sinon.stub(toast, 'warn');
    await actions.fetchCurrentUser({}, false)(dispatch);
    expect(dispatch).toBeCalledTimes(1);
    expect(warnStub.calledOnceWithExactly(networkErrorResponse)).toBe(true);
  });
});
