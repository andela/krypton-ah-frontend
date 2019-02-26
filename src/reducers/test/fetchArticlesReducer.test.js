import actionTypes from '../../actions/fetchArticlesAction/actionTypes';
import initialState from '../initialState';
import fetchArticlesReducer from '../articlesReducers/fetchArticlesReducers';
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
    expect(fetchArticlesReducer(undefined, {})).toEqual(initialState.Articles);
  });

  it('should return return the articles initial state by default', () => {
    const payload = fetchArticlesresponse;
    expect(
      fetchArticlesReducer(initialState.Articles, {
        type: FETCH_POPULAR_ARTICLES_SUCCESS,
        payload
      })
    ).toEqual(
      (initialState,
      {
        success: true,
        categoriesResponse: '',
        tagsResponse: '',
        featuredArticlesResponse: '',
        popularArticlesResponse: payload.data,
        trendingArticlesResponse: '',
        trendingArticlesResponsefailure: false,
        popularArticlesResponsefailure: false,
        categoriesResponsefailure: false,
        tagsResponsefailure: false,
        featuredArticlesfailure: false
      })
    );
  });

  it('should return return the articles initial state by default', () => {
    const payload = fetchArticlesresponse;
    expect(
      fetchArticlesReducer(initialState.Articles, {
        type: FETCH_TRENDING_ARTICLES_SUCCESS,
        payload
      })
    ).toEqual(
      (initialState,
      {
        success: true,
        categoriesResponse: '',
        tagsResponse: '',
        featuredArticlesResponse: '',
        popularArticlesResponse: '',
        trendingArticlesResponse: payload.data,
        trendingArticlesResponsefailure: false,
        popularArticlesResponsefailure: false,
        categoriesResponsefailure: false,
        tagsResponsefailure: false,
        featuredArticlesfailure: false
      })
    );
  });

  it('should return return the articles initial state by default', () => {
    const payload = fetchArticlesresponse;
    expect(
      fetchArticlesReducer(initialState.Articles, {
        type: FETCH_CATEGORIES_SUCCESS,
        payload
      })
    ).toEqual(
      (initialState,
      {
        success: true,
        categoriesResponse: payload.data,
        tagsResponse: '',
        featuredArticlesResponse: '',
        popularArticlesResponse: '',
        trendingArticlesResponse: '',
        trendingArticlesResponsefailure: false,
        popularArticlesResponsefailure: false,
        categoriesResponsefailure: false,
        tagsResponsefailure: false,
        featuredArticlesfailure: false
      })
    );
  });

  it('should return return the articles initial state by default', () => {
    const payload = fetchArticlesresponse;
    expect(
      fetchArticlesReducer(initialState.Articles, {
        type: FETCH_TAGS_SUCCESS,
        payload
      })
    ).toEqual(
      (initialState,
      {
        success: true,
        categoriesResponse: '',
        tagsResponse: payload.data,
        featuredArticlesResponse: '',
        popularArticlesResponse: '',
        trendingArticlesResponse: '',
        trendingArticlesResponsefailure: false,
        popularArticlesResponsefailure: false,
        categoriesResponsefailure: false,
        tagsResponsefailure: false,
        featuredArticlesfailure: false
      })
    );
  });

  it('should return return the articles initial state by default', () => {
    const payload = fetchArticlesresponse;
    expect(
      fetchArticlesReducer(initialState.Articles, {
        type: FETCH_FEATURED_ARTICLES_SUCCESS,
        payload
      })
    ).toEqual(
      (initialState,
      {
        success: true,
        categoriesResponse: '',
        tagsResponse: '',
        featuredArticlesResponse: payload.data,
        popularArticlesResponse: '',
        trendingArticlesResponse: '',
        trendingArticlesResponsefailure: false,
        popularArticlesResponsefailure: false,
        categoriesResponsefailure: false,
        tagsResponsefailure: false,
        featuredArticlesfailure: false
      })
    );
  });

  it('should return return the articles initial state by default', () => {
    const payload = error.response;
    expect(
      fetchArticlesReducer(initialState.Articles, {
        type: FETCH_TRENDING_ARTICLES_FAILURE,
        payload
      })
    ).toEqual(
      (initialState,
      {
        success: false,
        categoriesResponse: '',
        tagsResponse: '',
        featuredArticlesResponse: '',
        popularArticlesResponse: '',
        trendingArticlesResponse: payload.data.message,
        trendingArticlesResponsefailure: true,
        popularArticlesResponsefailure: false,
        categoriesResponsefailure: false,
        tagsResponsefailure: false,
        featuredArticlesfailure: false
      })
    );
  });

  it('should return return the articles initial state by default', () => {
    const payload = error.response;
    expect(
      fetchArticlesReducer(initialState.Articles, {
        type: FETCH_POPULAR_ARTICLES_FAILURE,
        payload
      })
    ).toEqual(
      (initialState,
      {
        success: false,
        categoriesResponse: '',
        tagsResponse: '',
        featuredArticlesResponse: '',
        popularArticlesResponse: payload.data.message,
        trendingArticlesResponse: '',
        trendingArticlesResponsefailure: false,
        popularArticlesResponsefailure: true,
        categoriesResponsefailure: false,
        tagsResponsefailure: false,
        featuredArticlesfailure: false
      })
    );
  });

  it('should return return the articles initial state by default', () => {
    const payload = error.response;
    expect(
      fetchArticlesReducer(initialState.Articles, {
        type: FETCH_CATEGORIES_FAILURE,
        payload
      })
    ).toEqual(
      (initialState,
      {
        success: false,
        categoriesResponse: payload.data.message,
        tagsResponse: '',
        featuredArticlesResponse: '',
        popularArticlesResponse: '',
        trendingArticlesResponse: '',
        trendingArticlesResponsefailure: false,
        popularArticlesResponsefailure: false,
        categoriesResponsefailure: true,
        tagsResponsefailure: false,
        featuredArticlesfailure: false
      })
    );
  });

  it('should return return the articles initial state by default', () => {
    const payload = error.response;
    expect(
      fetchArticlesReducer(initialState.Articles, {
        type: FETCH_TAGS_FAILURE,
        payload
      })
    ).toEqual(
      (initialState,
      {
        success: false,
        categoriesResponse: '',
        tagsResponse: payload.data.message,
        featuredArticlesResponse: '',
        popularArticlesResponse: '',
        trendingArticlesResponse: '',
        trendingArticlesResponsefailure: false,
        popularArticlesResponsefailure: false,
        categoriesResponsefailure: false,
        tagsResponsefailure: true,
        featuredArticlesfailure: false
      })
    );
  });

  it('should return return the articles initial state by default', () => {
    const payload = error.response;
    expect(
      fetchArticlesReducer(initialState.Articles, {
        type: FETCH_FEATURED_ARTICLES_FAILURE,
        payload
      })
    ).toEqual(
      (initialState,
      {
        success: false,
        categoriesResponse: '',
        tagsResponse: '',
        featuredArticlesResponse: payload.data.message,
        popularArticlesResponse: '',
        trendingArticlesResponse: '',
        trendingArticlesResponsefailure: false,
        popularArticlesResponsefailure: false,
        categoriesResponsefailure: false,
        tagsResponsefailure: false,
        featuredArticlesfailure: true
      })
    );
  });
});
