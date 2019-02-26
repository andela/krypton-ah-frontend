import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import CreateComment from './CreateComment';
import FetchComment from './FetchComment';


import './styles/CommentSection.scss';

const CommentSection = props => (
  <Fragment>
    <FetchComment articleId={props.articleId} mainCommentId={props.mainCommentId} />
    <CreateComment articleId={props.articleId} mainCommentId={props.mainCommentId} />
  </Fragment>
);


CommentSection.propTypes = {
  articleId: PropTypes.string.isRequired,
  mainCommentId: PropTypes.string
};

CommentSection.defaultProps = {
  mainCommentId: null
};

export default CommentSection;
