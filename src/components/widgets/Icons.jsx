import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Menu, Icon, Rating } from 'semantic-ui-react';
import Reactions from './ReactionIcons';
import { createArticleRating } from '../../actions/articleRatingActions';

class Icons extends Component {
  state = {
    rate: this.props.rating
  };

  componentDidUpdate(prevProps) {
    if (this.props.rating !== prevProps.rating) {
      this.updateRating(this.props.rating);
    }
  }

  getRate = disabled => (
    <Rating
      clearable
      disabled={disabled}
      maxRating={5}
      rating={this.state.rate}
      onRate={this.handleRate}
      size="small"
    />
  );

  handleRate = (e, { rating }) => {
    const ratingDetails = {
      reviewerId: this.props.user,
      articleId: this.props.selectedArticleId,
      rating
    };
    this.props.createArticleRating(ratingDetails);
    this.setState({ rate: ratingDetails.rating });
  };

  updateRating() {
    this.setState({ rate: this.props.rating });
  }

  render() {
    const { id, ratingIcon, numberofcomments, date, name, rating, disabled } = this.props;
    return (
      <Menu className="widgetContainer">
        <div className="icons">
          {ratingIcon ? (
            <React.Fragment>
              <Reactions date={date} selectedArticleId={id} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Reactions date={date} />
              <Icon disabled link size="small" name="bookmark outline" />
              <span>{numberofcomments}</span>
              <div className="rating">
                {this.getRate(disabled, rating)}
                {name ? <span>{name}</span> : ''}
              </div>
            </React.Fragment>
          )}
        </div>
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  article: state.readArticle,
  createRating: state.createArticleRating,
  userRating: state.getRating
});

export default connect(
  mapStateToProps,
  { createArticleRating }
)(Icons);

Icons.defaultProps = {
  selectedArticleId: 1,
  name: 'author-name',
  date: 'current-date',
  ratingIcon: 'rating-class',
  numberofcomments: 23,
  rating: 0,
  disabled: false
};
Icons.propTypes = {
  selectedArticleId: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  ratingIcon: PropTypes.string,
  numberofcomments: PropTypes.number,
  rating: PropTypes.number,
  disabled: PropTypes.bool
};
