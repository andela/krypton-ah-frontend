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
    response: {}
  }
};
export default initialState;
