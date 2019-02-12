import actionTypes from './actionTypes';

const { SIGNUP, UPDATE_FIELD } = actionTypes;

export const doSignUp = payload => (dispatch) => {
  dispatch({
    type: SIGNUP,
    payload
  });
};

export const doUpdateUserField = payload => (dispatch) => {
  dispatch({
    type: UPDATE_FIELD,
    payload
  });
};
