import axios from 'axios';
import { API_BASE_URL } from '../../constants';
import { config } from '../jwt';

/**
  * @description makes social media authentication axios request
  * @param {string} urlString
  * @returns {object} response
  */
const createComment = async (articleId, commentMessage, mainCommentId) => {
  let response = {};
  const url = `${API_BASE_URL}/api/v1/articles/${articleId}/comments`;
  if (mainCommentId) {
    response = await axios.post(url, { comment: commentMessage, mainCommentId }, config);
  } else {
    response = await axios.post(url, { comment: commentMessage }, config);
  }
  return response;
};

export default createComment;
