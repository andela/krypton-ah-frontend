import axios from 'axios';
import { API_BASE_URL } from '../../constants';

const options = {
  headers: {
    authorization: localStorage.getItem('authentication')
  }
};

const createBookmark = async (bookmarkDetail) => {
  const response = await axios.post(`${API_BASE_URL}/articles/bookmark`, bookmarkDetail, options);
  return response;
};

const removeBookmark = async (bookmarkDetail) => {
  const response = await axios({
    method: 'DELETE',
    url: `${API_BASE_URL}/articles/bookmark`,
    data: bookmarkDetail,
    headers: options.headers
  });
  return response;
};


export {
  createBookmark,
  removeBookmark
};
