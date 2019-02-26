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
  fetchtrending,
  fetchfeatured
} from '../../actions/fetchArticlesAction/fetchArticlesActions';
import Title from '../../components/sectionHeader';
import loader from '../loaders/responsechecker';

class MainContainer extends Component {
  componentWillMount() {
    const { fetchpopular, fetchtrending, fetchfeatured } = this.props;
    fetchpopular();
    fetchtrending();
    fetchfeatured();
  }

  render() {
    const { articles } = this.props;
    return (
      <div className="main">
        <Grid className="content" divided="vertically">
          <Grid.Row columns={1}>
            <Grid.Column>
              {loader(
                articles.featuredArticlesResponsefailure,
                <Carousel featured={articles.featuredArticlesResponse} />
              )}
            </Grid.Column>
            <Grid.Column className="second_grid">
              <Title text="featured" />
              {loader(
                articles.featuredArticlesResponsefailure,
                <FeaturedArticles articles={articles.featuredArticlesResponse} />
              )}
              <Title text="Popular" />
              {loader(
                articles.popularArticlesResponsefailure,
                <PopularArticles popular={articles.popularArticlesResponse} />
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid className="side" divided="vertically">
          <Sidewidget />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles
});

export default connect(
  mapStateToProps,
  { fetchpopular, fetchtrending, fetchfeatured }
)(MainContainer);

MainContainer.defaultProps = {
  articles: [],
  fetchpopular: [],
  fetchfeatured: [],
  fetchtrending: []
};

MainContainer.propTypes = {
  articles: PropTypes.func,
  fetchpopular: PropTypes.func,
  fetchfeatured: PropTypes.func,
  fetchtrending: PropTypes.func
};
