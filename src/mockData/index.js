import { API_BASE_URL } from '../constants';

const items = [
  {
    description:
      'The Touch Bar replaces the function keys that have long occupied the top of your keyboard with something much more versatile and capable.16 It changes automatically based on what you’re doing to show you relevant The Touch Bar replaces the function keys that have long occupied the top of your keyboard with something much more versatile and capable.16 It changes automatically based',
    shortdescription:
      'When bobbing for apples, an idealist endlessly reaches for the best apple, a pessimist settles for the first one within reach, while an optimist drains the barrel, fishes out all the apples and makes pie',
    shorterdescription:
      'When bobbing for apples, an idealist endlessly reaches for the best apple, a pessimist ',
    content: "Apple's news at CES 2019 shows it's facing some hard truths",
    title: 'Popular Title'
  }
];

const categories = ['Politics', 'Family', 'Techonology', 'Health', 'Sports', 'Wellbeing'];

const newCategories = [
  { key: 1, name: 'Politics' },
  { key: 2, name: 'Family' },
  { key: 3, name: 'Techonology' }
];

const popularArticles = [
  {
    description:
      'When bobbing for apples, an idealist endlessly reaches for the best apple, a pessimist settles for the first one within reach',
    content: "Apple's news at CES 2019 shows it's facing some hard truths",
    title: 'Popular Title'
  },
  {
    description:
      'When bobbing for apples, an idealist endlessly reaches for the best apple, a pessimist settles for the first one within reach',
    content: "Apple's news at CES 2019 shows it's facing some hard truths",
    title: 'Popular Title'
  },
  {
    description:
      'When bobbing for apples, an idealist endlessly reaches for the best apple, a pessimist settles for the first one within reach',
    content: "Apple's news at CES 2019 shows it's facing some hard truths",
    title: 'Popular Title'
  },
  {
    description:
      'When bobbing for apples, an idealist endlessly reaches for the best apple, a pessimist settles for the first one within reach',
    content: "Apple's news at CES 2019 shows it's facing some hard truths",
    title: 'Popular Title'
  }
];

const mockHeader = 'this is a placeholder header';
const trendingArticles = [
  {
    description:
      'When bobbing for apples, an idealist endlessly reaches for the best apple, a pessimist ',
    content: "Apple's news at CES 2019 shows it's facing some hard truths",
    title: 'Trending Title'
  },
  {
    description:
      'When bobbing for apples, an idealist endlessly reaches for the best apple, a pessimist ',
    content: "Apple's news at CES 2019 shows it's facing some hard truths",
    title: 'Trending Title'
  },
  {
    description:
      'When bobbing for apples, an idealist endlessly reaches for the best apple, a pessimist ',
    content: "Apple's news at CES 2019 shows it's facing some hard truths",
    title: 'Trending Title'
  },
  {
    description:
      'When bobbing for apples, an idealist endlessly reaches for the best apple, a pessimist ',
    content: "Apple's news at CES 2019 shows it's facing some hard truths",
    title: 'Popular Title'
  },
  {
    description:
      'When bobbing for apples, an idealist endlessly reaches for the best apple, a pessimist ',
    content: "Apple's news at CES 2019 shows it's facing some hard truths",
    title: 'Popular Title'
  }
];

const payload = {
  firstname: 'john',
  lastname: 'joseph',
  email: 'jo@jos.com',
  password: 'password123R'
};
const fakeUser2 = {
  email: 'jo@jos.com',
  password: 'password'
};
const signupEndpoint = `${API_BASE_URL}/users/signup`;
const signinEndpoint = `${API_BASE_URL}/users/signin`;

const signupOkResponse = {
  status: 201,
  success: true,
  data: {
    message:
      'Account successfully created, Kindly check your email to activate your account. In case you did not receive the activation link in your mail, kindly visit this link localhost:3000/api/v1/users/resend/activation/mail to resend the mail.'
  }
};

const mockResponse = {
  message: 'Successfully logged in'
};
const error = {
  response: {
    status: 400,
    success: false,
    data: {
      message: 'Oops! something went wrong, kindly try again'
    }
  }
};
const loginOkResponse = {
  status: 200,
  success: true,
  data: {
    token: 'sampleToken',
    message: 'You have sccessfully login'
  }
};
const loginBadResponse = {
  status: 400,
  success: false,
  data: {
    message: 'Incorrect credentials'
  }
};

const startAction = [{ type: 'START' }];

const signupSuccessAction = [
  {
    type: 'SIGNUP_SUCCESS',
    payload
  }
];
const signupFailureAction = [
  {
    type: 'SIGNUP_FAILURE',
    payload
  }
];

const fetchArticlesresponse = {
  data: {
    data:
    [{}, {}, {}, {}, {}, {}, {}, {}, {}]
  }
};

const fetchArticles = {
  data: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
};
const socialToken = 'hyakfhkdhiuashvk98924cxndusjdusnfixomj9';

const mockPath = 'auth/facebook/';
const profileData = {
  firstname: 'Isaiah',
  lastname: 'Afolayan',
  profileImage: '',
  bio: 'Software developer at Andela',
  id: 'd1564aa6-e81d-41ab-8469-0aa573f4a6c5',
  country: 'Nigeria',
  phonenumber: '+2348145692034',
  gender: 'male',
  username: 'Isaiah'
};

const autoLoginResponse = {
  data: {
    message: 'Your account has been successfully activated! You can begin spreaing your ideas now.'
  }
};
const getUserFailureResponse = {
  data: {
    success: false,
    message: 'error retieving user'
  }
};

const getUserSuccessResponse = {
  data: {
    success: true,
    message: 'users retrieved succesfully',
    data: {
      id: 'd1564aa6-e81d-41ab-8469-0aa573f4a6c5',
      email: '1skyboat1@gmail.com',
      password: '$2b$08$Q5LSk9wYgQeuxtSTGeq/0eBMclMVg1B7wE/hfWRCjsUb9YHkgx4h.',
      firstname: 'firstname',
      lastname: 'lastname',
      isverified: true,
      createdAt: '2019-02-08T09:58:13.163Z',
      updatedAt: '2019-02-08T09:58:13.163Z',
      userprofile: {
        id: 1,
        avatar: null,
        bio: 'A world-class software developer',
        UserId: 'd1564aa6-e81d-41ab-8469-0aa573f4a6c5',
        username: 'eltneg',
        phonenumber: '+2348137457862',
        country: 'Nigeria',
        gender: 'male',
        emailnotification: false,
        createdAt: '2019-02-14T16:54:58.292Z',
        updatedAt: '2019-02-18T08:41:31.199Z'
      },
      articles: [
        {
          title: 'Article title6',
          description: 'valid article description',
          isPublished: false,
          createdAt: '2019-02-14T17:53:01.904Z',
          id: 'a76d2040-7510-43d8-b58b-a32aba67ab48'
        }
      ]
    }
  }
};

const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlMb2FkIjp7ImlkIjoiZDE1NjRhYTYtZTgxZC00MWFiLTg0NjktMGFhNTczZjRhNmM1Iiwicm9sZSI6W119LCJpYXQiOjE1NTEzNDg0NjEsImV4cCI6MTU1MTQzNDg2MX0.W-Q3vDCP1b4iKMOm_cBSMTzmRqvU9kpzcP-E2ka2n4U';

export {
  fetchArticles,
  payload,
  fakeUser2,
  signupEndpoint,
  signinEndpoint,
  mockResponse,
  signupOkResponse,
  startAction,
  signupSuccessAction,
  signupFailureAction,
  error,
  loginOkResponse,
  loginBadResponse,
  items,
  categories,
  newCategories,
  popularArticles,
  trendingArticles,
  mockHeader,
  socialToken,
  mockPath,
  profileData,
  jwtToken,
  autoLoginResponse,
  fetchArticlesresponse,
  getUserSuccessResponse,
  getUserFailureResponse
};
