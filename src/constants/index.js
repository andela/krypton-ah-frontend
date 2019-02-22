const socialMediaElements = [
  {
    name: 'facebook f',
    key: 'facebook'
  },
  {
    name: 'twitter',
    key: 'twitter'
  },
  {
    name: 'google plus g',
    key: 'google plus g'
  },
  {
    name: 'instagram',
    key: 'instagram'
  }
];

const articleDetails = {
  className: 'description',
  description: 'placeholder descritption',
  title: 'placeholder title',
  image: 'https://res.cloudinary.com/ah-krypton/image/upload/v1550010452/widget.png'
};

const advertimage = 'https://res.cloudinary.com/ah-krypton/image/upload/v1548328425/mm17kbfqf7sjrw2w45rq.png';

const socialMediaLoginIcons = [
  {
    text: 'Facebook',
    iconName: 'facebook official',
    key: 1,
    url: process.env.FACEBOOK_URL
  },
  {
    text: 'Google',
    iconName: 'google plus square',
    key: 2,
    url: process.env.GOOGLE_URL
  }, {
    text: 'Linkedin',
    iconName: 'linkedin',
    key: 3,
    url: process.env.LINKEDIN_URL
  },
  {
    text: 'Twitter',
    iconName: 'twitter square',
    key: 4,
    url: process.env.TWITTER_URL
  }
];
const API_BASE_URL = 'https://krypton-ah-stage.herokuapp.com';
const authentication = 'authentication';
const twitterPath = '/auth/twitter/callback';
const networkErrorResponse = 'Network error! kindly try again later';

export {
  socialMediaElements,
  articleDetails,
  advertimage,
  socialMediaLoginIcons,
  API_BASE_URL,
  authentication,
  twitterPath,
  networkErrorResponse,
};
