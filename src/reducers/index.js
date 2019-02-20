import { combineReducers } from 'redux';
import authReducer from './authReducer';
import socialLogin from './socialLoginReducer';
import readArticle from './readArticleReducer';

const rootReducer = combineReducers({
  authReducer,
  socialLogin,
  readArticle
});

export default rootReducer;
