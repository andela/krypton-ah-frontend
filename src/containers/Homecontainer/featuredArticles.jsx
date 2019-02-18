import React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import './HomeContainer.scss';
import business from './images/business.png';
import Title from '../../components/sectionHeader';
import FeaturedWidget from '../../components/widgets/Articlewidgets/ArticlesFeedContainer';
import ArticlesIcons from '../../components/widgets/Icons';
import { items, popularArticles } from '../../mockData';

export default function FeaturedArticles() {
  return (
    <React.Fragment>
      <Title text="featured" />
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column className="rightGrid">
            <Card image={business} header="Elliot Baker" items={items} />
            <Card className="description">
              {items[0].description}
              <ArticlesIcons ratingIcon={null} />
            </Card>
          </Grid.Column>
          <Grid.Column>
            <FeaturedWidget className="featured-widget" articles={popularArticles} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
}
