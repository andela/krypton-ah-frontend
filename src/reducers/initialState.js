const initialState = {
  auth: {
    authIsLoading: false,
    success: false,
    response: '',
    isAuthenticated: null
  },
  Articles: {
    success: false,
    trendingresponse: '',
    popularresponse: '',
    categoriesresponse: '',
    tagsresponse: '',
    featuredarticles: ''
  },
  readArticle: {
    articleIsLoading: false,
    success: false,
    successResponse: {},
    failureResponse: {}
  }
}

export default {initialState};
