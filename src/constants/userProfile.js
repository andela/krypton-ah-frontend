import editProfileIcon from '../images/edit-profile-icon.png';
import profileIcon from '../images/profile-icon.png';
import followersIcon from '../images/followers-icon.png';
import followingIcon from '../images/following-icon.png';
import articleIcon from '../images/article-icon.png';
import settingsIcon from '../images/settings-icon.png';
import bookmarkIcon from '../images/bookmark-icon.png';

export const countries = [
  {
    text: 'Nigeria',
    value: 'Nigeria'
  },
  {
    text: 'Ghana',
    value: 'Ghana'
  }
];

export const genders = [
  {
    text: 'male',
    value: 'male'
  },
  {
    text: 'female',
    value: 'female'
  }
];

export const profileFormGroups = [
  [
    {
      element: 'input',
      name: 'firstname',
      type: 'text'
    },
    {
      element: 'input',
      name: 'lastname',
      type: 'text'
    }
  ],
  [
    {
      element: 'input',
      name: 'username',
      type: 'text'
    },
    {
      element: 'select',
      name: 'gender',
      options: genders
    }
  ],
  [
    {
      element: 'select',
      name: 'country',
      options: countries
    },
    {
      element: 'input',
      name: 'phone number',
      type: 'tel'
    }
  ]
];

const commonMenuItems = [
  {
    to: '/user-articles',
    text: 'ARTICLES',
    icon: articleIcon,
    count: '6'
  },
  {
    to: '/followers',
    text: 'FOLLOWERS',
    icon: followersIcon,
    count: '10'
  },
  {
    to: '/following',
    text: 'FOLLOWING',
    icon: followingIcon,
    count: '12'
  }
];

export const ownerMenuItem = [
  {
    to: '/profile',
    text: 'PROFILE',
    icon: editProfileIcon,
    count: null
  },
  {
    to: '/bookmarks',
    text: 'BOOKMARKS',
    icon: bookmarkIcon,
    count: null
  },
  ...commonMenuItems,
  {
    to: '/settings',
    text: 'SETTINGS',
    icon: settingsIcon,
    count: null
  }
];

export const unAuthUserMenuItem = [
  {
    to: '/profile',
    text: 'PROFILE',
    icon: profileIcon,
    count: null
  },
  ...commonMenuItems
];

export const authUserMenuItem = [
  ...unAuthUserMenuItem,
  {
    icon: 'button'
  }
];
