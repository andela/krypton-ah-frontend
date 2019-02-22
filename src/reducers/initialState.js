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
  user: {
    fetchIsLoading: false,
    updateIsLoading: false,
    firstname: '',
    lastname: '',
    username: '',
    gender: '',
    country: '',
    phonenumber: '',
    bio: '',
    userId: '',
    articles: [],
    userprofile: {}
  }
};
export default initialState;
