import React from 'react';
import { Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ArticlesIcons from '../Icons';
import { articleDetails } from '../../../constants';

export default function MainFeaturedArticle(props) {
  const { description, title, image } = props;
  return (
    <Feed.Event>
      <Feed.Label image={image} />
      <Feed.Content>
        <Feed.Date content={title} />
        <Feed.Summary>{description}</Feed.Summary>
        <ArticlesIcons />
      </Feed.Content>
    </Feed.Event>
  );
}

MainFeaturedArticle.defaultProps = {
  description: articleDetails.description,
  title: articleDetails.title,
  image: articleDetails.image
};

MainFeaturedArticle.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string
};
