/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { Grid, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../Homecontainer/HomeContainer.scss';
import Title from '../../components/sectionHeader';
import FeaturedWidget from '../../components/widgets/Articlewidgets/ArticlesFeedContainer';
import Categories from './categoriesContainer/Categories';
import Tags from '../../components/tags';
import NewsLetter from './Newsletter';
import Advert from '../../components/widgets/Advert';
import loader from '../loaders/responsechecker';
import { fetchcategories, fetchtags } from '../../actions/fetchArticlesAction/fetchArticlesActions';

class WidgetContainer extends Component {
  componentWillMount() {
    const { fetchcategories, fetchtags } = this.props;
    fetchcategories();
    fetchtags();
  }

  render() {
    const { categories, tags, trendingArticles } = this.props;
    return (
      <Grid className="side" divided="vertically">
        <Grid.Row columns={1}>
          <Grid.Column>
            <Title text="Trending" />
            {loader(
              trendingArticles.trendingArticlesfailure,
              <FeaturedWidget articles={trendingArticles.trendingArticlesResponse} />
            )}
            <Title text="Tags" />
            <List className="tags" divided relaxed>
              {loader(tags.tagsResponsefailure, <Tags type="tags" tags={tags.tagsResponse} />)}
            </List>
            <Title text="Categories" />
            {loader(
              categories.categoriesResponsefailure,
              <Categories category={categories.categoriesResponse} />
            )}
          </Grid.Column>
          <Advert />
          <NewsLetter />
        </Grid.Row>
      </Grid>
    );
  }
}


const mapStateToProps = state => ({
  categories: state.CategoriesReducer,
  tags: state.TagsReducer,
  trendingArticles: state.trendingArticlesReducer
});

export { WidgetContainer as Widget };
export default connect(
  mapStateToProps,
  { fetchcategories, fetchtags }
)(WidgetContainer);

WidgetContainer.defaultProps = {
  trendingArticles: [],
  tags: [],
  categories: [],
  fetchcategories: [],
  fetchtags: [],
};

WidgetContainer.propTypes = {
  trendingArticles: PropTypes.array,
  tags: PropTypes.array,
  categories: PropTypes.array,
  fetchcategories: PropTypes.func,
  fetchtags: PropTypes.string,
};
