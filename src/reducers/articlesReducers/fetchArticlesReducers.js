import actionTypes from '../../actions/fetchArticlesAction/actionTypes';
import initialState from '../initialState';

const {
  FETCH_POPULAR_ARTICLES_SUCCESS,
  FETCH_TRENDING_ARTICLES_SUCCESS,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_TAGS_SUCCESS,
  FETCH_FEATURED_ARTICLES_SUCCESS,
  FETCH_POPULAR_ARTICLES_FAILURE,
  FETCH_TRENDING_ARTICLES_FAILURE,
  FETCH_CATEGORIES_FAILURE,
  FETCH_TAGS_FAILURE,
  FETCH_FEATURED_ARTICLES_FAILURE
} = actionTypes;

const { trendingArticles, popularArticles, featuredArticles, categories, tags } = initialState;

export const trendingArticlesReducer = (state = trendingArticles, action) => {
  switch (action.type) {
    case FETCH_TRENDING_ARTICLES_SUCCESS:
      return {
        trendingArticlesResponsefailure: false,
        trendingArticlesResponseSuccess: true,
        trendingArticlesResponse: action.payload.data
      };
    case FETCH_TRENDING_ARTICLES_FAILURE:
      return {
        ...state,
        trendingArticlesResponsefailure: true
      };
    default:
      return state;
  }
};

export const popularArticlesReducer = (state = popularArticles, action) => {
  switch (action.type) {
    case FETCH_POPULAR_ARTICLES_SUCCESS:
      return {
        popularArticlesResponsefailure: false,
        popularArticlesResponseSuccess: true,
        popularArticlesResponse: action.payload.data
      };
    case FETCH_POPULAR_ARTICLES_FAILURE:
      return {
        ...state,
        popularArticlesResponsefailure: true
      };
    default:
      return state;
  }
};

export const FeaturedArticlesReducer = (state = featuredArticles, action) => {
  switch (action.type) {
    case FETCH_FEATURED_ARTICLES_SUCCESS:
      return {
        featuredArticlesfailure: false,
        featuredArticlesSuccess: true,
        featuredArticlesResponse: action.payload.data
      };
    case FETCH_FEATURED_ARTICLES_FAILURE:
      return {
        ...state,
        featuredArticlesfailure: true
      };
    default:
      return state;
  }
};

export const TagsReducer = (state = tags, action) => {
  switch (action.type) {
    case FETCH_TAGS_SUCCESS:
      return {
        tagsResponsefailure: false,
        tagsResponseSuccess: true,
        tagsResponse: action.payload.data
      };
    case FETCH_TAGS_FAILURE:
      return {
        ...state,
        tagsResponsefailure: true
      };
    default:
      return state;
  }
};


export const CategoriesReducer = (state = categories, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {
        categoriesResponsefailure: false,
        categoriesResponseSuccess: true,
        categoriesResponse: action.payload.data
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        categoriesResponsefailure: true
      };

    default:
      return state;
  }
};
