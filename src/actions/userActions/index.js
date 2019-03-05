import { toast } from 'react-toastify';
import {
  getUser,
  updateProfile,
  createProfile,
  uploadToCloudinary
} from '../../helpers/axiosHelper/user';
import triggerLoading from '../authAction/loading';
import actionTypes from './actionTypes';
import { networkErrorResponse } from '../../constants';

const {
  FETCH_USER_LOADING,
  UPDATE_USER_LOADING,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  IS_AUTHENTICATED,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_FAILURE,
  SET_IMAGE,
  REMOVE_IMAGE
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

export const fetchCurrentUserSuccess = userData => ({
  type: FETCH_CURRENT_USER_SUCCESS,
  payload: { profileImage: userData.userprofile.avatar, userId: userData.id }
});

export const fetchCurrentUserFailure = () => ({
  type: FETCH_CURRENT_USER_FAILURE
});

export const fetchCurrentUser = userId => async (dispatch) => {
  try {
    const response = await getUser(userId);
    dispatch({ type: IS_AUTHENTICATED });
    dispatch(fetchCurrentUserSuccess(response.data.data));
  } catch (error) {
    if (error.response) {
      dispatch(fetchCurrentUserFailure());
    } else {
      // toast.warn(networkErrorResponse);
      dispatch(fetchCurrentUserFailure());
    }
  }
};

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

export const setImage = (imageFile, previewUrl) => async (dispatch) => {
  dispatch({
    type: SET_IMAGE,
    payload: { imageFile, previewUrl }
  });
};

export const removeImage = () => async (dispatch) => {
  dispatch({
    type: REMOVE_IMAGE
  });
};

export const updateUserProfile = (payload, create) => async (dispatch) => {
  try {
    dispatch(triggerLoading(UPDATE_USER_LOADING));
    if (payload.imageFile) {
      const cloudinaryResponse = await uploadToCloudinary(payload.imageFile);
      if (cloudinaryResponse.statusText === 'OK') {
        payload.avatar = cloudinaryResponse.data.url;
      } else {
        toast.error('Image upload failed!');
        removeImage()(dispatch);
        return;
      }
      removeImage()(dispatch);
    }
    const response = create ? await createProfile(payload) : await updateProfile(payload);
    dispatch(fetchCurrentUserSuccess({ userprofile: response.data.data }));
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
