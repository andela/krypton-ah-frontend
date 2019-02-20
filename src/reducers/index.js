import { combineReducers } from 'redux';
import articlesReducers from './articlesReducers/fetchArticlesReducers';
import authReducer from './authReducer';
import socialLogin from './socialLoginReducer';
import readArticle from './readArticleReducer';

const rootReducer = combineReducers({
  articles: articlesReducers,
  authReducer,
  socialLogin,
  readArticle
});

export default rootReducer;
