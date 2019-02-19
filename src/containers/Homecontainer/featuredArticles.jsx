import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card } from 'semantic-ui-react';
import './HomeContainer.scss';
import Title from '../../components/sectionHeader';
import FeaturedWidget from '../../components/widgets/Articlewidgets/ArticlesFeedContainer';
import ArticlesIcons from '../../components/widgets/Icons';
import Loader from '../HOC/comonentLoader';

export default function FeaturedArticles({ articles }) {
  if (!articles) {
    return <Loader />;
  }
  const article = articles;
  return (
    <React.Fragment>
      <Title text="featured" />
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column className="rightGrid">
            <Link replace={false} to={`/articles/${article[0].id}`}>
              <Card image={article[0].featuredImageUrl} header={article[0].title} />
              <Card className="description">
                <p className="descriptionBody">{article[0].description}</p>
                <ArticlesIcons ratingIcon={null} />
              </Card>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <FeaturedWidget className="featured-widget" articles={articles} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
}
