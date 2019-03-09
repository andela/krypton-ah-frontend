import { combineReducers } from 'redux';
import {
  trendingArticlesReducer,
  popularArticlesReducer,
  FeaturedArticlesReducer,
  TagsReducer,
  CategoriesReducer
} from './articlesReducers/fetchArticlesReducers';
import authReducer from './authReducer';
import socialLogin from './socialLoginReducer';
import readArticle from './readArticleReducer';
import totalArticleReactions from './totalArticleReactionReducer';
import userReducer from './userReducer';
import newArticleReaction from './articleReactionsReducer';

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
  totalArticleReactions,
  newArticleReaction
});

export default rootReducer;
