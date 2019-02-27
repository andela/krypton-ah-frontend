import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import '../Homecontainer/HomeContainer.scss';
import Title from '../../components/sectionHeader';
import FeaturedWidget from '../../components/widgets/Articlewidgets/ArticlesFeedContainer';
import { trendingArticles } from '../../mockData';
import Tags from '../../components/tags';
import NewsLetter from './Newsletter';
import Advert from '../../components/widgets/Advert';
import Categories from './categoriesContainer/Categories';

export default function WidgetContainer() {
  return (
    <Grid.Row columns={1}>
      <Grid.Column>
        <Title text="Trending" />
        <FeaturedWidget className="featured-widget" articles={trendingArticles} />
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
