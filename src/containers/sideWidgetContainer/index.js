/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { Grid, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../Homecontainer/HomeContainer.scss';
import { connect } from 'react-redux';
import Title from '../../components/sectionHeader';
import FeaturedWidget from '../../components/widgets/Articlewidgets/ArticlesFeedContainer';
import Categories from './categories/Categories';
import Tags from '../../components/tags';
import NewsLetter from './Newsletter';
import Advert from '../../components/widgets/Advert';
import { fetchpopular, fetchtrending, fetchcategories, fetchtags, fetchfeatured } from '../../actions/fetchArticlesActions';

class WidgetContainer extends Component {
  componentWillMount() {
    const { fetchcategories, fetchtags } = this.props;
    fetchcategories();
    fetchtags();
  }

  render() {
    const { articles } = this.props;
    return (
      <Grid.Row columns={1}>
        <Grid.Column>
          <Title text="Trending" />
          <FeaturedWidget
            className="featured-widget"
            articles={articles.trendingresponse.data}
          />
          <Title text="Tags" />
          <List className="tags" divided relaxed>
            <Tags tags={articles.tagsresponse} type="tags" />
          </List>
          <Categories category={articles.categoriesresponse} />
        </Grid.Column>
        <Advert />
        <NewsLetter />
      </Grid.Row>
    );
  }
}


const mapStateToProps = state => ({
  articles: state.articles
});

export default connect(
  mapStateToProps,
  { fetchpopular, fetchtrending, fetchcategories, fetchtags, fetchfeatured }
)(WidgetContainer);

WidgetContainer.defaultProps = {
  articles: [],
  fetchcategories: [],
  fetchtags: [],
};

WidgetContainer.propTypes = {
  articles: PropTypes.array,
  fetchcategories: PropTypes.array,
  fetchtags: PropTypes.array,
};
