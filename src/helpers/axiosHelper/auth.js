import axios from 'axios';
import { API_BASE_URL } from '../../constants';

const signupCall = async (user) => {
  const response = await axios.post(`${API_BASE_URL}/users/signup`, user);
  return response;
};

const loginCall = async (user) => {
  const response = await axios.post(`${API_BASE_URL}/users/signin`, user);
  return response;
};

export {
  signupCall,
  loginCall
};
