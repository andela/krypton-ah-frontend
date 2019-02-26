import React from 'react';
import { Card, Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Feeds from './Feeds';
import './widget.scss';
import Loader from '../../../containers/loaders/componentLoader';

export default function ArticlesFeedContainer({ articles }) {
  if (!articles) {
    return <Loader />;
  }
  return (
    <Card className="widgetIcons">
      <Card.Content className>
        <Feed>
          {articles.map(article => (
            <Feeds
              key={article.id}
              description={article.description}
              title={article.title}
              id={article.id}
              image={article.featuredImageUrl}
              date={article.createdAt}
            />
          ))}
        </Feed>
      </Card.Content>
    </Card>
  );
}

ArticlesFeedContainer.defaultProps = {
  articles: []
};

ArticlesFeedContainer.propTypes = {
  articles: PropTypes.array
};
