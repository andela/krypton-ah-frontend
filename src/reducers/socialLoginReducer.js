import actionsTypes from '../actions/authAction/actionTypes';
import initialState from './initialState';

/**
 * @description - dispatch when social media authentication succeeds
 * @param {object} state
 * @param {boolean} flag either true or false
 * @returns {object} - new updated state
 */
const updateSocialLoginState = (state, flag) => (
  { ...state, isAuthenticated: flag }
);

/**
 * @description - calls functions that updates state based on the action received
 * @param {object} state
 * @param {object} action
 * @returns {function} - update state function
 */
const socialLoginReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case actionsTypes.SOCIAL_AUTH_SUCCESS:
      return updateSocialLoginState(state, true);
    case actionsTypes.SOCIAL_AUTH_FAIL:
      return updateSocialLoginState(state, false);
    default:
      return state;
  }
};

export default socialLoginReducer;
