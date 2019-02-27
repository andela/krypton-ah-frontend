import actionTypes from '../../actions/fetchArticlesAction/actionTypes';
import initialState from '../initialState';
import * as reducers from '../articlesReducers/fetchArticlesReducers';
import { fetchArticlesresponse, error } from '../../mockData';

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

describe('test fetch articles reducer', () => {
  it('should return return the articles initial state by default', () => {
    expect(reducers.FeaturedArticlesReducer(undefined, {})).toEqual(initialState.featuredArticles);
  });

  it('should return return the articles initial state by default', () => {
    expect(reducers.TagsReducer(undefined, {})).toEqual(initialState.tags);
  });

  it('should return return the articles initial state by default', () => {
    expect(reducers.CategoriesReducer(undefined, {})).toEqual(initialState.categories);
  });

  it('should return return the articles initial state by default', () => {
    expect(reducers.popularArticlesReducer(undefined, {})).toEqual(initialState.popularArticles);
  });

  it('should return return the articles initial state by default', () => {
    expect(reducers.trendingArticlesReducer(undefined, {})).toEqual(initialState.trendingArticles);
  });

  it('should return return the articles initial state by default', () => {
    const payload = fetchArticlesresponse;
    expect(
      reducers.popularArticlesReducer(initialState.popularArticles, {
        type: FETCH_POPULAR_ARTICLES_SUCCESS,
        payload
      })
    ).toEqual(
      (initialState,
      {
        popularArticlesResponseSuccess: true,
        popularArticlesResponse: payload.data,
        popularArticlesResponsefailure: false,

      })
    );
  });

  it('should return return the articles initial state by default', () => {
    const payload = fetchArticlesresponse;
    expect(
      reducers.trendingArticlesReducer(initialState.trendingArticles, {
        type: FETCH_TRENDING_ARTICLES_SUCCESS,
        payload
      })
    ).toEqual(
      (initialState,
      {
        trendingArticlesResponseSuccess: true,
        trendingArticlesResponse: payload.data,
        trendingArticlesResponsefailure: false,
      })
    );
  });

  it('should return return the articles initial state by default', () => {
    const payload = fetchArticlesresponse;
    expect(
      reducers.CategoriesReducer(initialState.Articles, {
        type: FETCH_CATEGORIES_SUCCESS,
        payload
      })
    ).toEqual(
      (initialState,
      {
        categoriesResponseSuccess: true,
        categoriesResponse: payload.data,
        categoriesResponsefailure: false,
      })
    );
  });

  it('should return return the articles initial state by default', () => {
    const payload = fetchArticlesresponse;
    expect(
      reducers.TagsReducer(initialState.Articles, {
        type: FETCH_TAGS_SUCCESS,
        payload
      })
    ).toEqual(
      (initialState,
      {
        tagsResponseSuccess: true,
        tagsResponse: payload.data,
        tagsResponsefailure: false
      })
    );
  });

  it('should return return the articles initial state by default', () => {
    const payload = fetchArticlesresponse;
    expect(
      reducers.FeaturedArticlesReducer(initialState.FeaturedArticlesReducer, {
        type: FETCH_FEATURED_ARTICLES_SUCCESS,
        payload
      })
    ).toEqual(
      (initialState,
      {
        featuredArticlesSuccess: true,
        featuredArticlesResponse: payload.data,
        featuredArticlesfailure: false
      })
    );
  });

  it('should return return the articles initial state by default', () => {
    const payload = error.response;
    expect(
      reducers.trendingArticlesReducer(initialState.Articles, {
        type: FETCH_TRENDING_ARTICLES_FAILURE,
        payload
      })
    ).toEqual(
      (initialState,
      {
        trendingArticlesResponseSuccess: false,
        trendingArticlesResponse: [],
        trendingArticlesResponsefailure: true,
      })
    );
  });

  it('should return return the articles initial state by default', () => {
    const payload = error.response;
    expect(
      reducers.popularArticlesReducer(initialState.Articles, {
        type: FETCH_POPULAR_ARTICLES_FAILURE,
        payload
      })
    ).toEqual(
      (initialState,
      {
        popularArticlesResponseSuccess: false,
        popularArticlesResponse: [],
        popularArticlesResponsefailure: true,
      })
    );
  });

  it('should return return the articles initial state by default', () => {
    const payload = error.response;
    expect(
      reducers.CategoriesReducer(initialState.Articles, {
        type: FETCH_CATEGORIES_FAILURE,
        payload
      })
    ).toEqual(
      (initialState,
      {
        categoriesResponseSuccess: false,
        categoriesResponse: [],
        categoriesResponsefailure: true,
      })
    );
  });

  it('should return return the articles initial state by default', () => {
    const payload = error.response;
    expect(
      reducers.TagsReducer(initialState.TagsReducer, {
        type: FETCH_TAGS_FAILURE,
        payload
      })
    ).toEqual(
      (initialState.TagsReducer,
      {
        tagsResponseSuccess: false,
        tagsResponse: [],
        tagsResponsefailure: true,
      })
    );
  });

  it('should return return the articles initial state by default', () => {
    const payload = error.response;
    expect(
      reducers.FeaturedArticlesReducer(initialState.FeaturedArticlesReducer, {
        type: FETCH_FEATURED_ARTICLES_FAILURE,
        payload
      })
    ).toEqual(
      (initialState,
      {
        featuredArticlesSuccess: false,
        featuredArticlesResponse: [],
        featuredArticlesfailure: true
      })
    );
  });
});
