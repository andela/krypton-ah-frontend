import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import NotFound from '../pages/NotFound';

export default [
  {
    name: 'home',
    component: Home,
    exact: true,
    path: '/'
  },
  {
    name: 'login',
    component: Login,
    exact: true,
    path: '/login'
  },
  {
    name: 'signup',
    component: SignUp,
    exact: true,
    path: '/signup'
  },
  {
    name: 'signin',
    component: SignIn,
    exact: true,
    path: '/signin'
  },
  {
    name: '404',
    component: NotFound,
    exact: true,
    path: '*'
  }
];
