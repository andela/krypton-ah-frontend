import axios from 'axios';
import { API_BASE_URL, options } from '../../constants';

export const getUser = async (user) => {
  const response = await axios.get(`${API_BASE_URL}/users/${user}`);
  return response;
};

export const createProfile = async (payload) => {
  const response = await axios.post(`${API_BASE_URL}/profile`, payload, options);
  return response;
};

export const updateProfile = async (payload) => {
  const response = await axios.put(`${API_BASE_URL}/profile`, payload, options);
  return response;
};
