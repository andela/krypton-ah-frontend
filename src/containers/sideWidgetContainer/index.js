import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import '../Homecontainer/HomeContainer.scss';
import Title from '../../components/sectionHeader';
import FeaturedWidget from '../../components/Widgets/Articlewidgets/ArticlesFeedContainer';
import { items } from '../../constants';
import Categories from './categoriesContainer/Categories';
import Tags from '../../components/tags';
import NewsLetter from './Newsletter';
import Advert from '../../components/Widgets/Advert';

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
        <List className="tags" divided relaxed>
          <Tags />
        </List>
        <Categories />
      </Grid.Column>
      <Advert />
      <NewsLetter />
    </Grid.Row>
  );
}
