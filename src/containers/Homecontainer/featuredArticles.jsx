import React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './HomeContainer.scss';
import FeaturedWidget from '../../components/widgets/Articlewidgets/ArticlesFeedContainer';
import ArticlesIcons from '../../components/widgets/Icons';
import Loader from '../loaders/componentLoader';

export default function FeaturedArticles({ articles }) {
  if (!articles.data) {
    return <Loader />;
  }

  const side = articles.data;
  const article = articles;
  return (
    <React.Fragment>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column className="rightGrid">
            <Link replace={false} to={`/article/${article.data[0].id}`}>
              <Card image={article.data[0].featuredImageUrl} header={article.data[0].title} />
            </Link>
            <Card className="description">
              <p className="descriptionBody">{article.data[0].description}</p>
              <ArticlesIcons
                ratingIcon={null}
                date={article.data[0].createdAt}
                name={`${articles.data[0].articleAuthor.firstname} ${
                  articles.data[0].articleAuthor.lastname
                }`}
<<<<<<< HEAD
<<<<<<< HEAD
                id={article.data[0].id}
=======
>>>>>>> landing-page-logic
=======
                rating={article.data[0].averageRating}
                disabled
>>>>>>> setup-reducer-and-action
              />
            </Card>
          </Grid.Column>
          <Grid.Column>
            <FeaturedWidget className="featured-widget" articles={side} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
}

FeaturedArticles.defaultProps = {
  articles: []
};

FeaturedArticles.propTypes = {
  articles: PropTypes.string
};
