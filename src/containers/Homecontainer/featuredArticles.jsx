import React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import './HomeContainer.scss';
import business from './images/business.png';
import Title from '../../components/sectionHeader';
import FeaturedWidget from '../../components/Widgets/Articlewidgets/ArticlesFeedContainer';
import ArticlesIcons from '../../components/Widgets/Icons';
import { items } from '../../constants';

export default function FeaturedArticles() {
  return (
    <div>
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
            <FeaturedWidget
              className="featured-widget"
              description={items[0].shortdescription}
              title={items[0].content}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
