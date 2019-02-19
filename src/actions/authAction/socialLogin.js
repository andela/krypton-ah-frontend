import { twitterPath } from '../../constants';
import verify from '../../helpers/axiosHelper/verifySocialAuth';
import setToken from '../../helpers/jwt';
import actionTypes from './actionTypes';


/**
  * @description makes social media authentication axios request
  * @param {string} urlString
  * @returns {object} response
  */
const loginSuccess = payload => ({
  type: actionTypes.SOCIAL_AUTH_SUCCESS,
  payload
});

/**
  * @description makes social media authentication axios request
  * @param {string} urlString
  * @returns {object} response
  */
const loginFailed = payload => ({
  type: actionTypes.SOCIAL_AUTH_FAIL,
  payload
});

/**
  * @description makes social media authentication axios request
  * @param {string} urlString
  * @returns {object} response
  */
const socialLogin = (socialToken, pathname) => async (dispatch) => {
  const urlPath = `${pathname}${socialToken}`;
  try {
    let token = socialToken.split('=')[1];
    let response = {};
    if (pathname !== twitterPath) {
      response = await verify.verifySocialAuth(urlPath);
      ({ token } = response.data);
    }
    setToken(token);
    dispatch(loginSuccess(response));
  } catch (error) {
    dispatch(loginFailed(error));
  }
};

export {
  loginSuccess,
  loginFailed,
  socialLogin
};
