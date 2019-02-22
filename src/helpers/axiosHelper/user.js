import axios from 'axios';
import { hostURL, options } from '../../constants';

export const getUser = async (user) => {
  const response = await axios.get(`${hostURL}/users/${user}`);
  return response;
};

export const createProfile = async (payload) => {
  const response = await axios.post(`${hostURL}/profile`, payload, options);
  return response;
};

export const updateProfile = async (payload) => {
  const response = await axios.put(`${hostURL}/profile`, payload, options);
  return response;
};
