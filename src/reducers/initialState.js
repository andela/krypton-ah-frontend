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
    commentsArray: [],
    threadsArray: [],
    commentLike: 0
  }
};
export default initialState;
