import { toast } from 'react-toastify';
import { getUser, updateProfile, createProfile } from '../../helpers/axiosHelper/user';
import triggerLoading from '../authAction/loading';
import actionTypes from './actionTypes';
import { networkErrorResponse } from '../../constants';

const {
  FETCH_USER_LOADING,
  UPDATE_USER_LOADING,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE
} = actionTypes;

export const fetchUserSuccess = userData => ({
  type: FETCH_USER_SUCCESS,
  payload: userData
});

export const fetchUserFailure = () => ({
  type: FETCH_USER_FAILURE
});

export const updateUserSuccess = userData => ({
  type: UPDATE_USER_SUCCESS,
  payload: userData
});

export const updateUserFailure = () => ({
  type: UPDATE_USER_FAILURE
});

export const fetchUser = userId => async (dispatch) => {
  try {
    dispatch(triggerLoading(FETCH_USER_LOADING));
    const response = await getUser(userId);
    dispatch(fetchUserSuccess(response.data.data));
  } catch (error) {
    if (error.response) {
      dispatch(fetchUserFailure());
    } else {
      toast.warn(networkErrorResponse);
    }
  }
};

export const updateUserProfile = (payload, create) => async (dispatch) => {
  try {
    dispatch(triggerLoading(UPDATE_USER_LOADING));
    const response = create ? await createProfile(payload) : await updateProfile(payload);
    dispatch(updateUserSuccess(response.data.data));
    toast.success(response.data.message);
  } catch (error) {
    if (error.response) {
      dispatch(updateUserFailure());
      toast.error(error.response.data.message);
    } else {
      toast.warn(networkErrorResponse);
    }
  }
};
