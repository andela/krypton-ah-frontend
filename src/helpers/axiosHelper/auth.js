import axios from 'axios';
import { API_BASE_URL } from '../../constants';

const hostURL = `${API_BASE_URL}/api/v1`;

const signupCall = async (user) => {
  const response = await axios.post(`${hostURL}/users/signup`, user);
  return response;
};

const loginCall = async (user) => {
  const response = await axios.post(`${hostURL}/users/signin`, user);
  return response;
};

export {
  signupCall,
  loginCall
};
