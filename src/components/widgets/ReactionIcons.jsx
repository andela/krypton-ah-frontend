import React, { Component, Fragment } from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTotalReactions } from '../../actions/articleReactionsAction';

class ReactionIcons extends Component {
  state = {
    likeClicked: false,
    dislikeClicked: false
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
    const { date, numberofcomments, totalArticleReactions } = this.props;
    const { likes, dislikes } = totalArticleReactions.successResponse;
    const { likeClicked, dislikeClicked } = this.state;
    const outline = '';
    return (
      <Fragment>
        <i className="dates">{date}</i>
        {likeClicked ? this.likeArticle(outline) : this.likeArticle()}
        {likes}
        {dislikeClicked ? this.dislikeArticle(outline) : this.dislikeArticle()}
        {dislikes}
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
  numberofcomments: 23
};

ReactionIcons.propTypes = {
  date: PropTypes.string,
  numberofcomments: PropTypes.number,
  selectedArticleId: PropTypes.string.isRequired,
  getTotalReactions: PropTypes.func.isRequired,
  totalArticleReactions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  totalArticleReactions: state.totalArticleReactions
});

export { ReactionIcons as ReactionIconsPage };
export default connect(
  mapStateToProps,
  { getTotalReactions }
)(ReactionIcons);
