import { toast } from 'react-toastify';
import { getUser, updateProfile, createProfile } from '../../helpers/axiosHelper/user';
import triggerLoading from '../authAction/loading';
import actionTypes from './actionTypes';

const {
  FETCH_USER_LOADING,
  UPDATE_USER_LOADING,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  IS_AUTHENTICATED,
  FETCH_OWNER_SUCCESS,
  FETCH_OWNER_FAILURE,
  FETCH_OWNER_LOADING
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

export const fetchOwnerSuccess = (userData) => {
  if (userData.userprofile) {
    return {
      type: FETCH_OWNER_SUCCESS,
      payload: { profileImage: userData.userprofile.avatar, userId: userData.id }
    };
  }
  return {
    type: FETCH_OWNER_SUCCESS,
    payload: { profileImage: '', userId: userData.id }
  };
};

export const fetchOwnerFailure = () => ({
  type: FETCH_OWNER_FAILURE
});

export const updateUserFailure = () => ({
  type: UPDATE_USER_FAILURE
});

export const fetchUser = userId => async (dispatch) => {
  try {
    dispatch(triggerLoading(FETCH_USER_LOADING));
    const response = await getUser(userId);
    if (response.data.success) {
      dispatch(fetchUserSuccess(response.data.data));
    } else {
      dispatch(fetchUserFailure());
    }
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    }
    dispatch(fetchUserFailure());
  }
};

export const fetchOwner = userId => async (dispatch) => {
  try {
    dispatch(triggerLoading(FETCH_OWNER_LOADING));
    const response = await getUser(userId);
    if (response.data.success) {
      dispatch({ type: IS_AUTHENTICATED });
      dispatch(fetchOwnerSuccess(response.data.data));
    }
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    }
    dispatch(fetchOwnerFailure());
  }
};

export const updateUserProfile = (payload, create) => async (dispatch) => {
  try {
    dispatch(triggerLoading(UPDATE_USER_LOADING));
    const response = create ? await createProfile(payload) : await updateProfile(payload);
    if (response.data.success) {
      dispatch(updateUserSuccess(response.data.data));
      toast.success(response.data.message);
    } else {
      dispatch(updateUserFailure());
      toast.error(response.data.message);
    }
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    }
    dispatch(updateUserFailure());
  }
};
