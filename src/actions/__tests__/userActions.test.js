import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import * as actions from '../userActions';
import actionTypes from '../actionTypes';

const mockStore = configureStore([thunk]);
const store = mockStore();

describe('actions', () => {
  const payload = {
    firstname: 'john',
    lastname: 'joseph',
    email: 'jo@jos.com',
    password: 'password'
  };
  beforeEach(() => {
    store.clearActions();
  });
  it('should create an action to update the userstate', () => {
    const expectedAction = [
      {
        type: actionTypes.UPDATE_FIELD,
        payload
      }
    ];
    store.dispatch(actions.doUpdateUserField(payload));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action to signup', () => {
    const expectedAction = [
      {
        type: actionTypes.SIGNUP,
        payload
      }
    ];
    store.dispatch(actions.doSignUp(payload));
    expect(store.getActions()).toEqual(expectedAction);
  });
});
