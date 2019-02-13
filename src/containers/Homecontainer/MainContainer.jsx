import React from 'react';
import { Grid } from 'semantic-ui-react';
import Carousel from '../../components/carousel/index';
import Sidewidget from '../sideWidgetContainer';
import FeaturedArticles from './featuredArticles';
import PopularArticles from './PopularArticles';
import './HomeContainer.scss';

export default function MainContainer() {
  return (
    <div className="Main">
      <Grid className="content" divided="vertically">
        <Grid.Row columns={1}>
          <Grid.Column>
            <Carousel />
          </Grid.Column>
          <Grid.Column className="second_grid">
            <FeaturedArticles />
            <PopularArticles />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid className="side" divided="vertically">
        <Sidewidget />
      </Grid>
    </div>
  );
}
