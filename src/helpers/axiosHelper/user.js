import axios from 'axios';
import { API_BASE_URL, options } from '../../constants';

export const getUser = async (user) => {
  const response = await axios.get(`${API_BASE_URL}/users/${user}`);
  return response;
};

export const uploadToCloudinary = async (imageFile) => {
  const formData = new FormData();
  formData.append('file', imageFile);
  formData.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET);
  formData.append('api_key', process.env.CLOUDINARY_API_KEY);
  formData.append('timestamp', Date.now() / 1000);
  const response = await axios.post(
    'https://api.cloudinary.com/v1_1/eltneg/image/upload',
    formData,
    { headers: { 'X-Requested-With': 'XMLHttpRequest' } }
  );
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
