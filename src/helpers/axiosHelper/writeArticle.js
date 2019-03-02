import axios from 'axios';
import { CLOUDINARY_UPLOAD_URL, CLOUDINARY_UPLOAD_PRESET } from '../../constants/index';

const { API_BASE_URL } = process.env;
const options = {
  headers: {
    authorization: localStorage.getItem('authentication')
  }
};
export const createArticleCall = async (article) => {
  const response = await axios.post(`${API_BASE_URL}/articles`, article, options);
  return response;
};

export const imageUpload = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  try {
    const response = await axios({
      url: CLOUDINARY_UPLOAD_URL,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: formData
    });
    return response;
  } catch (error) {
    return error.message;
  }
};

export default { createArticleCall, imageUpload };
