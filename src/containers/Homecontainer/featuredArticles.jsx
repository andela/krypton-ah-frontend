import React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import './HomeContainer.scss';
import business from './images/business.png';
import Title from '../../components/titleheader/header';
import FeaturedWidget from '../../components/widgets/featuredwidget';
import ArticlesIcons from '../../components/widgets/articleswidgets/reactionWidgets';
import { items } from '../../constants';

export default function featuredArticles() {
  return (
    <fragment>
      <Title text="featured" />
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column className="rightGrid">
            <Card image={business} header="Elliot Baker" items={items} />
            <Card className="description">
              {items[0].description}
              <ArticlesIcons />
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
    </fragment>
  );
}
