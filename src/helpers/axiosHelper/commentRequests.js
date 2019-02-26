import axios from 'axios';
import { API_BASE_URL } from '../../constants';
import { config } from '../jwt';


let response = {};
/**
  * @description makes social media authentication axios request
  * @param {string} urlString
  * @returns {object} response
  */
const createComment = async (articleId, commentMessage, mainCommentId) => {
  const url = `${API_BASE_URL}/api/v1/articles/${articleId}/comments`;
  if (mainCommentId) {
    response = await axios.post(url, { comment: commentMessage, mainCommentId }, config);
  } else {
    response = await axios.post(url, { comment: commentMessage }, config);
  }
  return response;
};

const fetchComment = async (articleId, mainCommentId) => {
  let url = `${API_BASE_URL}/api/v1/articles/${articleId}/comments`;
  if (mainCommentId) {
    url += `/${mainCommentId}`;
  }

  response = await axios.get(url, config);
  return response.data.data;
};

const commentLike = async () => {
  // const url = `${API_BASE_URL}/api/v1/articles/reactions/${articleId}/?reaction=like`;
  // response = await axios.get(url, config);
  response = {
    like: 10,
    dislike: 4
  };

  return response;
};

export { createComment, fetchComment, commentLike };
