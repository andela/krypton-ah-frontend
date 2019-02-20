import axios from 'axios';

const { API_BASE_URL } = process.env;

/**
  * @description makes social media authentication axios request
  * @param {string} urlString
  * @returns {object} response
  */
const verifySocialAuth = async (urlPath) => {
  const url = `${API_BASE_URL}/api/v1${urlPath}`;
  const response = await axios.get(url);
  return response;
};

export default { verifySocialAuth };
