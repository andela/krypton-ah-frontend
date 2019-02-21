import jwtDecode from 'jwt-decode';
import { authentication } from '../constants';

const setToken = token => localStorage.setItem(authentication, token);

export const getUserIdFromLocalStorage = () => {
  const token = localStorage.getItem(authentication);
  try {
    const { payLoad } = jwtDecode(token);
    return payLoad;
  } catch (error) {
    return null;
  }
};

export default setToken;
