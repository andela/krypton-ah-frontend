import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReadArticle from '../../components/ReadArticle';
import CommentSection from '../../components/CommentSection';
import Widgets from '../../components/widgets/Icons';
import './ViewArticle.scss';
import '../../components/widgets/Articlewidgets/widget.scss';

export default function ViewArticle(props) {
  const { title } = props.match.params;
  return (
    <Fragment>
      <ReadArticle selectedArticle={title} />
      <div className=" articleReactions">
        <Widgets disabled={false} name={false} selectedArticleId={title} ratingIcon={false} />
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
