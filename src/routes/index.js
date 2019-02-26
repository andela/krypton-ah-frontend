import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import ViewArticle from '../pages/ViewArticle';
import Verification from '../pages/Verification';
import socialAuth from '../components/socialAuth/socialAuth';
import Profile from '../pages/Profile';

export default [
  {
    name: 'home',
    component: Home,
    exact: true,
    path: '/'
  },
  {
    name: 'auth',
    component: socialAuth,
    path: '/auth/*/callback',
    exact: false,
    strict: false
  },
  {
    name: 'login',
    component: Login,
    exact: true,
    path: '/login',
    routeType: 'unAuthenticated',
    redirect: '/'
  },
  {
    name: 'viewArticle',
    component: ViewArticle,
    exact: true,
    path: '/article/:title'
  },
  {
    name: 'signup',
    component: SignUp,
    exact: true,
    path: '/signup',
    routeType: 'unAuthenticated',
    redirect: '/'
  },
  {
    name: 'verification',
    component: Verification,
    exact: true,
    path: '/verification',
    routeType: 'unAuthenticated',
    redirect: '/'
  },
  {
    name: 'profile',
    component: Profile,
    exact: true,
    path: '/profile/:userId'
  },
  {
    name: '404',
    component: NotFound,
    exact: true,
    path: '*'
  }
];
