/* eslint-disable no-throw-literal */
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from '../fetchArticlesActions';
import actionTypes from '../actionTypes';
import * as axios from '../../../helpers/axiosHelper/articlesAxiosCalls';
import {
  payload,
  fetchArticlesresponse,
  fetchArticles
} from '../../../mockData';

const mockStore = configureStore([thunk]);
const store = mockStore({ auth: {} });
const dispatch = jest.fn();

describe('user authentication actions Signup', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    store.clearActions();
    dispatch.mockRestore();
    moxios.uninstall();
  });

  it(`should return an action object once ${actionTypes.FETCH_CATEGORIES_SUCCESS} is fired`, () => {
    expect(actions.fetchCategoriesSuccess(fetchArticlesresponse)).toEqual({
      type: actionTypes.FETCH_CATEGORIES_SUCCESS,
      payload: fetchArticlesresponse
    });
  });

  it(`should return an action object once ${actionTypes.FETCH_FEATURED_ARTICLES_SUCCESS} is fired`, () => {
    expect(actions.fetchfeaturedSuccess(fetchArticlesresponse)).toEqual({
      type: actionTypes.FETCH_FEATURED_ARTICLES_SUCCESS,
      payload: fetchArticlesresponse
    });
  });

  it(`should return an action object once ${actionTypes.FETCH_TRENDING_ARTICLES_SUCCESS} is fired`, () => {
    expect(actions.fetchtrendingSuccess(fetchArticlesresponse)).toEqual({
      type: actionTypes.FETCH_TRENDING_ARTICLES_SUCCESS,
      payload: fetchArticlesresponse
    });
  });

  it(`should return an action object once ${actionTypes.FETCH_POPULAR_ARTICLES_SUCCESS} is fired`, () => {
    expect(actions.fetchpopularSuccess(fetchArticlesresponse)).toEqual({
      type: actionTypes.FETCH_POPULAR_ARTICLES_SUCCESS,
      payload: fetchArticlesresponse
    });
  });

  it(`should return an action object once ${actionTypes.FETCH_TAGS_SUCCESS} is fired`, () => {
    expect(actions.fetchTagsSuccess(fetchArticlesresponse)).toEqual({
      type: actionTypes.FETCH_TAGS_SUCCESS,
      payload: fetchArticlesresponse
    });
  });

  it(`should return an action object once ${actionTypes.FETCH_POPULAR_ARTICLES_SUCCESS} is fired`, () => {
    expect(actions.fetchpopularSuccess(fetchArticlesresponse)).toEqual({
      type: actionTypes.FETCH_POPULAR_ARTICLES_SUCCESS,
      payload: fetchArticlesresponse
    });
  });

  it(`should return an action object once ${actionTypes.FETCH_POPULAR_ARTICLES_SUCCESS} is fired`, () => {
    expect(actions.fetchPopularFailure(fetchArticlesresponse)).toEqual({
      type: actionTypes.FETCH_POPULAR_ARTICLES_FAILURE,
      payload: fetchArticlesresponse
    });
  });


  it(`should return an action object once ${actionTypes.SIGNUP_FAILURE} is fired`, () => {
    expect(actions.fetchPopularFailure(payload)).toEqual({
      type: actionTypes.FETCH_POPULAR_ARTICLES_FAILURE,
      payload
    });
  });
});

describe('user authentication actions login', () => {
  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });
  afterEach(() => {
    dispatch.mockRestore();
    moxios.uninstall();
  });

  it('should call the login success dispatch function', async () => {
    axios.fetchCategories = jest.fn().mockResolvedValue(fetchArticlesresponse);
    await actions.fetchcategories()(dispatch);
    expect(dispatch).toBeCalledTimes(1);
  });

  it('should call the login success dispatch function', async () => {
    axios.fetchTags = jest.fn().mockResolvedValue(fetchArticlesresponse);
    await actions.fetchtags()(dispatch);
    expect(dispatch).toBeCalledTimes(1);
  });

  it('should call the login success dispatch function', async () => {
    axios.fetchPopularArticles = jest.fn().mockResolvedValue(fetchArticles);
    await actions.fetchpopular()(dispatch);
    expect(dispatch).toBeCalledTimes(2);
  });

  it('should call the login success dispatch function', async () => {
    axios.fetchFeaturedArticles = jest.fn().mockResolvedValue(fetchArticlesresponse);
    await actions.fetchfeatured()(dispatch);
    expect(dispatch).toBeCalledTimes(1);
  });


  it('should throw error', async () => {
    axios.fetchCategories = jest.fn(() => {
      throw { response: 'hello' };
    });
    try {
      await actions.fetchcategories(payload)(dispatch);
    } catch (error) {
      expect(error).toEqual({ response: 'hello' });
    }
    expect(dispatch).toBeCalledTimes(1);
    store.clearActions();
  });


  it('should throw error', async () => {
    axios.fetchTags = jest.fn(() => {
      throw { response: 'hello' };
    });
    try {
      await actions.fetchtags(payload)(dispatch);
    } catch (error) {
      expect(error).toEqual({ response: 'hello' });
    }
    expect(dispatch).toBeCalledTimes(1);
    store.clearActions();
  });


  it('should throw error', async () => {
    axios.fetchPopularArticles = jest.fn(() => {
      throw { response: 'hello' };
    });
    try {
      await actions.fetchpopular(payload)(dispatch);
    } catch (error) {
      expect(error).toEqual({ response: 'hello' });
    }
    expect(dispatch).toBeCalledTimes(2);
    store.clearActions();
  });


  it('should throw error', async () => {
    axios.fetchPopularArticles = jest.fn(() => {
      throw { response: 'hello' };
    });
    try {
      await actions.fetchpopular(payload)(dispatch);
    } catch (error) {
      expect(error).toEqual({ response: 'hello' });
    }
    expect(dispatch).toBeCalledTimes(2);
    store.clearActions();
  });

  it('should throw error', async () => {
    axios.fetchFeaturedArticles = jest.fn(() => {
      throw { response: 'hello' };
    });
    try {
      await actions.fetchfeatured(payload)(dispatch);
    } catch (error) {
      expect(error).toEqual({ response: 'hello' });
    }
    expect(dispatch).toBeCalledTimes(1);
    store.clearActions();
  });
});
