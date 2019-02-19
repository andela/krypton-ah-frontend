import { combineReducers } from 'redux';
import articlesReducers from './articlesReducers/fetchArticlesReducers';
import authReducer from './authReducer';
import socialLogin from './socialLoginReducer';


const rootReducer = combineReducers({
  articles: articlesReducers,
  authReducer,
  socialLogin
});

export default rootReducer;
