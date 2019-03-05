import axios from 'axios';
import { config } from '../jwt';

const updateArticleReaction = async (articleId, reactionType) => {
  const url = `${
    process.env.API_BASE_URL
  }/articles/reaction/${articleId}/?reaction=${reactionType}`;
  const response = await axios.put(url, { articleId, reactionType }, config);
  return response;
};

export default { updateArticleReaction };
