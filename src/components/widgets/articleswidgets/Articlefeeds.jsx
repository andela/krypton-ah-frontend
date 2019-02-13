import React from 'react';
import { Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ArticlesIcons from './reactionWidgets';

export default function featuredwidget(props) {
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

featuredwidget.defaultProps = {
  description: 'placeholder descritption',
  title: 'placeholder title',
  image:
    'https://res.cloudinary.com/ah-krypton/image/upload/v1550010452/widget.png'
};

featuredwidget.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string
};
