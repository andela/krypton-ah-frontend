import { combineReducers } from 'redux';
import authReducer from './authReducer';
import socialLogin from './socialLoginReducer';
import readArticle from './readArticleReducer';
import totalArticleReactions from './totalArticleReactionReducer';

const rootReducer = combineReducers({
  authReducer,
  socialLogin,
  readArticle,
  totalArticleReactions
});

export default rootReducer;
