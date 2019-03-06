import React, { Component, Fragment } from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { dateFormatter } from '../../helpers/articleInfoFormatter';
import { getTotalReactions, articleReaction } from '../../actions/articleReactionsAction';

class ReactionIcons extends Component {
  componentDidMount = () => {
    this.props.getTotalReactions(this.props.selectedArticleId);
  };

  createLikeIcon = disabled => (
    <i role="presentation" onClick={this.createReaction.bind(this, 'like')}>
      <Icon disabled={disabled} link size="small" fitted name="thumbs up outline" />
    </i>
  );

  createDislikeIcon = disabled => (
    <i role="presentation" onClick={this.createReaction.bind(this, 'dislike')}>
      <Icon disabled={disabled} link size="small" fitted name="thumbs down outline" />
    </i>
  );

  createReaction = (newReaction) => {
    this.props.articleReaction(this.props.selectedArticleId, newReaction);
    setTimeout(() => this.props.getTotalReactions(this.props.selectedArticleId), 500);
  };

  render() {
    const { date, numberofcomments, totalArticleReactions, disabled } = this.props;
    const { likes, dislikes } = totalArticleReactions.successResponse;
    return (
      <Fragment>
        <Icon disabled={disabled} link size="small" fitted name="time">
          <span>{dateFormatter(date)}</span>
        </Icon>
        {this.createLikeIcon(disabled)}
        <span>{likes}</span>
        {this.createDislikeIcon(disabled)}
        <span>{dislikes}</span>
        <i className="articleComment">
          <Icon disabled={disabled} link size="small" fitted name="comments outline" />
        </i>
        <span className="commentspan">{numberofcomments}</span>
      </Fragment>
    );
  }
}
ReactionIcons.defaultProps = {
  date: '28th february 2019',
  numberofcomments: 0
};

ReactionIcons.propTypes = {
  date: PropTypes.string,
  numberofcomments: PropTypes.number,
  selectedArticleId: PropTypes.string.isRequired,
  getTotalReactions: PropTypes.func.isRequired,
  totalArticleReactions: PropTypes.object.isRequired,
  articleReaction: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  totalArticleReactions: state.totalArticleReactions,
  newArticleReaction: state.newArticleReaction
});

export { ReactionIcons as ReactionIconsPage };
export default connect(
  mapStateToProps,
  { getTotalReactions, articleReaction }
)(ReactionIcons);
