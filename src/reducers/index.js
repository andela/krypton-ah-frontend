import { combineReducers } from 'redux';
import { trendingArticlesReducer, popularArticlesReducer, FeaturedArticlesReducer, TagsReducer, CategoriesReducer } from './articlesReducers/fetchArticlesReducers';
import authReducer from './authReducer';
import socialLogin from './socialLoginReducer';
import readArticle from './readArticleReducer';

const rootReducer = combineReducers({
  trendingArticlesReducer,
  popularArticlesReducer,
  FeaturedArticlesReducer,
  CategoriesReducer,
  TagsReducer,
  authReducer,
  socialLogin,
  readArticle
});

export default rootReducer;
