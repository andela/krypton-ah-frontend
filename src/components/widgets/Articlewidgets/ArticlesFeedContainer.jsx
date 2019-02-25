import React from 'react';
import { Card, Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Feeds from './Feeds';
import './widget.scss';
import { items } from '../../../mockData';

export default function ArticlesFeedContainer({ articles, className }) {
  return (
    <Card className="widgetIcons">
      <Card.Content className={className}>
        <Feed>
          {articles.map(article => (
            <Feeds key={article.title} description={article.description} title={article.title} />
          ))}
        </Feed>
      </Card.Content>
    </Card>
  );
}

ArticlesFeedContainer.defaultProps = {
  articles: [items],
  className: 'description'
};

ArticlesFeedContainer.propTypes = {
  articles: PropTypes.array,
  className: PropTypes.string
};
