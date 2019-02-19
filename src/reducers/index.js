import { combineReducers } from 'redux';
import articlesReducers from './articlesReducers/fetchArticlesReducers';

const rootReducer = combineReducers({
  articles: articlesReducers
});

export default rootReducer;
