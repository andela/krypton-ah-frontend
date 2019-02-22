import { getUser, updateProfile, createProfile } from '../../helpers/axiosHelper/user';
import triggerLoading from '../authAction/loading';
import actionTypes from './actionTypes';

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
    if (response.data.success) {
      dispatch(fetchUserSuccess(response.data.data));
    } else {
      dispatch(fetchUserFailure());
    }
  } catch (error) {
    dispatch(fetchUserFailure());
  }
};

export const updateUserProfile = (payload, create) => async (dispatch) => {
  try {
    dispatch(triggerLoading(UPDATE_USER_LOADING));
    const response = create ? await createProfile(payload) : await updateProfile(payload);
    if (response.data.success) {
      dispatch(updateUserSuccess(response.data.data));
    } else {
      dispatch(updateUserFailure());
    }
  } catch (error) {
    dispatch(updateUserFailure());
  }
};
