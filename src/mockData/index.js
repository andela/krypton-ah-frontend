import faker from 'faker';
import { API_BASE_URL } from '../constants';

export * from './profile';

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

const categories = {
  data:
  ['Politics', 'Family', 'Techonology', 'Health', 'Sports', 'Wellbeing']
};

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

const defaultprop = {
  data: [
    {
      articleAuthor: { firstname: 'hakeem', lastname: 'ibrahim', userprofile: null },
      authorId: '65719288-0395-445e-b587-2b98b70bdec9',
      averageRating: 3,
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      createdAt: '2019-01-23T07:09:10.447Z',
      description: 'Descriptive title',
      featuredImageUrl: 'https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg',
      id: '65719288-0395-445e-b587-2b98b70bdec9',
      isPublished: true,
      numberOfReviews: null,
      readTime: 5,
      slug: 'this-is-a-post-title-l78hgybf',
      tags: [],
      title: 'This is a post title',
      updatedAt: '2019-01-23T07:09:10.447Z',
      data: {
        message: {
          id: ['id must be a valid uuid']
        },
        success: true
      }
    }
  ]
};

const payload = {
  firstname: 'john',
  lastname: 'joseph',
  email: 'jo@jos.com',
  password: 'password123R'
};

const bookmarkPayload = {
  userId: faker.random.uuid(),
  articleId: faker.random.uuid(),
};

const fakeUser2 = {
  email: 'jo@jos.com',
  password: 'password'
};
const signupEndpoint = `${API_BASE_URL}/users/signup`;
const signinEndpoint = `${API_BASE_URL}/users/signin`;
const bookmarkEndpoint = `${API_BASE_URL}/articles/bookmark`;

const bookmarkedResponse = {
  success: true,
  message: 'Article bookmarked succesfully',
  data: {
    id: faker.random.uuid(),
    userId: faker.random.uuid(),
    articleId: faker.random.uuid(),
  }
};

const removeBookmarkResponse = {
  success: true,
  message: 'Article removed successfully'
};
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
    data: [{}, {}, {}, {}, {}, {}, {}, {}, {}]
  }
};

const fetchArticles = {
  data: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
};

const socialToken = 'hyakfhkdhiuashvk98924cxndusjdusnfixomj9';

const mockPath = 'auth/facebook/';

const autoLoginResponse = {
  data: {
    message: 'Your account has been successfully activated! You can begin spreaing your ideas now.'
  }
};

const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlMb2FkIjp7ImlkIjoiZDE1NjRhYTYtZTgxZC00MWFiLTg0NjktMGFhNTczZjRhNmM1Iiwicm9sZSI6W119LCJpYXQiOjE1NTEzNDg0NjEsImV4cCI6MTU1MTQzNDg2MX0.W-Q3vDCP1b4iKMOm_cBSMTzmRqvU9kpzcP-E2ka2n4U';

export {
  fetchArticles,
  payload,
  fakeUser2,
  signupEndpoint,
  signinEndpoint,
  bookmarkEndpoint,
  bookmarkedResponse,
  bookmarkPayload,
  removeBookmarkResponse,
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
  jwtToken,
  autoLoginResponse,
  fetchArticlesresponse,
  defaultprop
};
