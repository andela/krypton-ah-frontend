import React, { Component, Fragment } from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTotalReactions } from '../../actions/articleReactionsAction';

class ReactionIcons extends Component {
  state = {
    like: false,
    dislike: false
  };

  componentDidMount = () => {
    this.props.getTotalReactions(this.props.selectedArticleId);
  };

  likeArticle = (outline = 'outline') => {
    const name = outline.length === 0 ? 'thumbs up' : `thumbs up ${outline}`;
    return (
      <i role="presentation">
        <Icon disabled link size="small" fitted name={`thumbs up ${name}`} />
      </i>
    );
  };

  dislikeArticle = (outline = 'outline') => {
    const name = outline.length === 0 ? 'thumbs down' : `thumbs down ${outline}`;
    return (
      <i role="presentation">
        <Icon disabled link size="small" fitted name={`thumbs down ${name}`} />
      </i>
    );
  };

  render() {
    const { date, numberoflikes, numberofdislikes, numberofcomments } = this.props;
    const { like, dislike } = this.state;
    const outline = '';
    return (
      <Fragment>
        <i className="dates">{date}</i>
        {like ? this.likeArticle(outline) : this.likeArticle()}
        {numberoflikes}
        {dislike ? this.dislikeArticle(outline) : this.dislikeArticle()}
        {numberofdislikes}
        <i className="articleComment">
          <Icon disabled link size="small" fitted name="comments outline" />
          {numberofcomments}
        </i>
      </Fragment>
    );
  }
}
ReactionIcons.defaultProps = {
  date: '28th february 2019',
  numberoflikes: 23,
  numberofdislikes: 23,
  numberofcomments: 23
};

ReactionIcons.propTypes = {
  date: PropTypes.string,
  numberoflikes: PropTypes.number,
  numberofdislikes: PropTypes.number,
  numberofcomments: PropTypes.number,
  selectedArticleId: PropTypes.string.isRequired,
  getTotalReactions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  state
});

export { ReactionIcons as ReactionIconsPage };
export default connect(
  mapStateToProps,
  { getTotalReactions }
)(ReactionIcons);
