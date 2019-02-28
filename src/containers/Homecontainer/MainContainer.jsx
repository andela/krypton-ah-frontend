/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Carousel from '../../components/carousel/index';
import Sidewidget from '../sideWidgetContainer';
import FeaturedArticles from './featuredArticles';
import PopularArticles from './popular';
import './HomeContainer.scss';
import {
  fetchpopular,
  fetchfeatured
} from '../../actions/fetchArticlesAction/fetchArticlesActions';
import Title from '../../components/sectionHeader';
import loader from '../loaders/responsechecker';

class MainContainer extends Component {
  componentWillMount() {
    const { fetchpopular, fetchfeatured } = this.props;
    fetchpopular();
    fetchfeatured();
  }

  render() {
    const { featuredArticles, popularArticles } = this.props;
    return (
      <div className="main">
        <Grid className="content" divided="vertically">
          <Grid.Row columns={1}>
            {loader(
              featuredArticles.featuredArticlesfailure,
              <Carousel featured={featuredArticles.featuredArticlesResponse} />
            )}
            <Grid.Column className="second_grid">
              <Title text="featured" />
              {loader(featuredArticles.featuredArticlesfailure,
                <FeaturedArticles articles={featuredArticles.featuredArticlesResponse} />
              )}
              <Title text="Popular" />
              {loader(
                popularArticles.popularArticlesResponsefailure,
                <PopularArticles popular={popularArticles.popularArticlesResponse} />
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Sidewidget />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  featuredArticles: state.FeaturedArticlesReducer,
  popularArticles: state.popularArticlesReducer
});

export { MainContainer as MainPage };
export default connect(
  mapStateToProps,
  { fetchpopular, fetchfeatured }
)(MainContainer);

MainContainer.defaultProps = {
  featuredArticles: [],
  fetchpopular: [],
  fetchfeatured: [],
  popularArticles: []
};

MainContainer.propTypes = {
  popularArticles: PropTypes.array,
  featuredArticles: PropTypes.array,
  fetchpopular: PropTypes.func,
  fetchfeatured: PropTypes.func
};
