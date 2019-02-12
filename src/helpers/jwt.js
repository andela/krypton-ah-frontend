import { authentication } from '../constants';

const setToken = token => localStorage.setItem(authentication, token);

export default setToken;
