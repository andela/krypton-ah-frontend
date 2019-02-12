import { combineReducers } from 'redux';
import articlesReducers from './articlesReducers/fetchArticlesReducers';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  articles: articlesReducers,
  authReducer
});

export default rootReducer;
