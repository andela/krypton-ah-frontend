import actions from '../../actions/authAction/actionTypes';
import socialLoginReducer from '../socialLoginReducer';

const {
  SOCIAL_AUTH_SUCCESS,
  SOCIAL_AUTH_FAIL
} = actions;

describe('Reducer for Social Media Authentication', () => {
  let action = { type: '' };

  it('should return the initial state of reducer', () => {
    const initialState = { isAuthenticated: null, error: false };

    expect(socialLoginReducer(initialState, action))
      .toEqual({
        isAuthenticated: null,
        error: false,
      });
  });

  it('should return the updated state if social media authentication is successfull', () => {
    action = { type: SOCIAL_AUTH_SUCCESS };

    expect(socialLoginReducer({ isAuthenticated: null }, action))
      .toEqual({ isAuthenticated: true });
  });

  it('should return the updated state if social media authentication is not successfull', () => {
    const error = { };
    action = { type: SOCIAL_AUTH_FAIL, payload: error };

    expect(socialLoginReducer({ isAuthenticated: null }, action))
      .toEqual({ isAuthenticated: false });
  });
});
