import { combineReducers } from 'redux';
import authReducer from './authReducer';
import socialLogin from './socialLoginReducer';
import readArticle from './readArticleReducer';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
  authReducer,
  socialLogin,
  readArticle,
  commentReducer
});

export default rootReducer;
