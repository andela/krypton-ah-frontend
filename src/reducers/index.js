import { combineReducers } from 'redux';
import authReducer from './authReducer';
import socialLogin from './socialLoginReducer';
import readArticle from './readArticleReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  socialLogin,
  readArticle
});

export default rootReducer;
