const initialState = {
  auth: {
    authIsLoading: false,
    success: false,
    response: '',
    isAuthenticated: null
  },
  trendingArticles: {
    trendingArticlesResponseSuccess: false,
    trendingArticlesResponsefailure: false,
    trendingArticlesResponse: []
  },
  popularArticles: {
    popularArticlesResponseSuccess: false,
    popularArticlesResponse: [],
    popularArticlesResponsefailure: false
  },
  featuredArticles: {
    featuredArticlesResponse: [],
    featuredArticlesfailure: false,
    featuredArticlesSuccess: false,
  },
  categories: {
    categoriesResponseSuccess: false,
    categoriesResponse: [],
    categoriesResponsefailure: false,
  },
  tags: {
    tagsResponseSuccess: false,
    tagsResponse: [],
    tagsResponsefailure: false,

  },
  readArticle: {
    articleIsLoading: false,
    success: false,
    successResponse: {},
    failureResponse: {}
  },
  totalArticleReactions: {
    totalReactionsLoading: false,
    success: false,
    successResponse: {},
    failureResponse: {}
  },
  user: {
    fetchIsLoading: false,
    updateIsLoading: false,
    userId: '',
    articles: [],
    userprofile: {}
  },
};

export default initialState;
