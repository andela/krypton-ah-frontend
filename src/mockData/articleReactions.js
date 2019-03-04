const error = {
  response: {
    data: { success: false, message: 'Value must be a UUID' }
  }
};
const reactionType = 'dislike';

const validReaction = {
  success: true,
  message: 'Operation Successful'
};
export { error, reactionType, validReaction };
