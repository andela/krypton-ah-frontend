import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import '../Homecontainer/HomeContainer.scss';
import advert from '../Homecontainer/images/lunch.png';
import Title from '../../components/titleheader/header';
import FeaturedWidget from '../../components/widgets/featuredwidget';
import { items, Tags } from '../../constants';
import Categories from './categoriesContainer/categories';
import NewsLetter from './Newsletter/newsLetter';

export default function WidgetContainer() {
  return (
    <Grid.Row columns={1}>
      <Grid.Column>
        <Title text="Trending" />
        <FeaturedWidget
          className="featured-widget"
          description={items[0].shorterdescription}
          title={items[0].content}
        />
        <Title text="Tags" />
        <Tags />
        <Categories />
      </Grid.Column>
      <Grid.Column className="Advert">
        <Image src={advert} />
        <NewsLetter />
      </Grid.Column>
    </Grid.Row>
  );
}
