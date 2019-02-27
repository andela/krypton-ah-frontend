import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReadArticle from '../../components/ReadArticle';
import Widgets from '../../components/widgets/ReactionIcons';
import CommentSection from '../../components/CommentSection';
import './ViewArticle.scss';

export default function ViewArticle(props) {
  const { title } = props.match.params;
  return (
    <Fragment>
      <ReadArticle selectedArticle={title} />
      <div className=" articleReactions">
        <Widgets selectedArticleId={title} />
      </div>
      <CommentSection articleId={title} />
    </Fragment>
  );
}

ViewArticle.propTypes = {
  match: PropTypes.object.isRequired,
  params: PropTypes.object
};

ViewArticle.defaultProps = {
  params: {}
};
