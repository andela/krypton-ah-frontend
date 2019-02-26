const initialState = {
  auth: {
    authIsLoading: false,
    success: false,
    response: '',
    isAuthenticated: null
  },
  readArticle: {
    articleIsLoading: false,
    success: false,
    successResponse: {},
    failureResponse: {}
  },
  comment: {
    commentIsLoading: false,
    success: false,
    commentsArray: []
  }
};
export default initialState;
