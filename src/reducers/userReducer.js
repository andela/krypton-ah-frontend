import actionTypes from '../actions/actionTypes';

const { SIGNUP, UPDATE_FIELD } = actionTypes;

const userState = {
  firstname: '',
  lastname: '',
  email: '',
  passsword: '',
};

export default (state = userState, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        [action.payload.field]: action.payload.value
      };
    case SIGNUP:
      return {
        ...state,
        [action.payload.field]: action.payload.value
      };
    default:
      return state;
  }
};
