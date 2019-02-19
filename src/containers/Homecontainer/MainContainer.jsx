import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Carousel from '../../components/carousel/index';
import Sidewidget from '../sideWidgetContainer';
import FeaturedArticles from './featuredArticles';
import PopularArticles from './popular';
import './HomeContainer.scss';
import { fetchpopular, fetchtrending, fetchfeatured } from '../../actions/fetchArticlesActions';
import HomeloaderHOC from '../HOC/loaderHoc';

class MainContainer extends Component {
  componentWillMount() {
    // eslint-disable-next-line no-shadow
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
              <Carousel featured={articles.trendingresponse} />
            </Grid.Column>
            <Grid.Column className="second_grid">
              <FeaturedArticles articles={articles.featuredarticles.data} />
              <PopularArticles popular={articles.popularresponse} />
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
)(HomeloaderHOC(MainContainer));

MainContainer.defaultProps = {
  articles: [],
  fetchpopular: [],
  fetchfeatured: [],
  fetchtrending: []
};

MainContainer.propTypes = {
  articles: PropTypes.array,
  fetchpopular: PropTypes.array,
  fetchfeatured: PropTypes.array,
  fetchtrending: PropTypes.array
};
