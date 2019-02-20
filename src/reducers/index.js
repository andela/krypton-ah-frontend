import { combineReducers } from 'redux';
import authReducer from './authReducer';
import socialLogin from './socialLoginReducer';


const rootReducer = combineReducers({
  authReducer,
  socialLogin
});

export default rootReducer;
