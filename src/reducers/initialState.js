const initialState = {
  auth: {
    authIsLoading: false,
    success: false,
    response: '',
    isAuthenticated: null
  },
  Articles: {
    success: false,
    trendingArticlesResponse: '',
    popularArticlesResponse: '',
    categoriesResponse: '',
    tagsResponse: '',
    featuredArticlesResponse: '',
    trendingArticlesResponsefailure: false,
    popularArticlesResponsefailure: false,
    categoriesResponsefailure: false,
    tagsResponsefailure: false,
    featuredArticlesfailure: false
  },
  readArticle: {
    articleIsLoading: false,
    success: false,
    successResponse: {},
    failureResponse: {}
  }
};

export default initialState;
