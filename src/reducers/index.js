import { combineReducers } from 'redux';
import { trendingArticlesReducer, popularArticlesReducer, FeaturedArticlesReducer, TagsReducer, CategoriesReducer } from './articlesReducers/fetchArticlesReducers';
import authReducer from './authReducer';
import socialLogin from './socialLoginReducer';
import readArticle from './readArticleReducer';
import commentReducer from './commentReducer';
import totalArticleReactions from './totalArticleReactionReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  trendingArticlesReducer,
  popularArticlesReducer,
  FeaturedArticlesReducer,
  CategoriesReducer,
  TagsReducer,
  authReducer,
  userReducer,
  socialLogin,
  readArticle,
  commentReducer,
  totalArticleReactions
});

export default rootReducer;
