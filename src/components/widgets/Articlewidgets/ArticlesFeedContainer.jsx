import React from 'react';
import { Card, Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Feeds from './Feeds';
import './widget.scss';

export default function ArticlesFeedContainer({ description, title, className }) {
  // const { description, title, className } = props;
  return (
    <div>
      <Card>
        <Card.Content className={className}>
          <Feed>
            <Feeds description={description} title={title} />
            <Feeds description={description} title={title} />
            <Feeds description={description} title={title} />
          </Feed>
        </Card.Content>
      </Card>
    </div>
  );
}

ArticlesFeedContainer.defaultProps = {
  description: 'rating_class',
  title: '28th february 2019',
  className: 'description'
};

ArticlesFeedContainer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string
};
