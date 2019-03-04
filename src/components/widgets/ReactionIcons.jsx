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

  createLikeIcon = () => (
    <i role="presentation" onClick={this.createReaction.bind(this, 'like')}>
      <Icon disabled link size="small" fitted name="thumbs up outline" />
    </i>
  );

  createDislikeIcon = () => (
    <i role="presentation" onClick={this.createReaction.bind(this, 'dislike')}>
      <Icon disabled link size="small" fitted name="thumbs down outline" />
    </i>
  );

  createReaction = (newReaction) => {
    this.props.articleReaction(this.props.selectedArticleId, newReaction);
    setTimeout(() => this.props.getTotalReactions(this.props.selectedArticleId), 100);
  };

  render() {
    const { date, numberofcomments, totalArticleReactions } = this.props;
    const { likes, dislikes } = totalArticleReactions.successResponse;

    return (
      <Fragment>
        <Icon disabled link size="small" fitted name="time">
          <span>{dateFormatter(date)}</span>
        </Icon>
        <i className="dates">{date}</i>
        {this.createLikeIcon()}
        {likes}
        {this.createDislikeIcon()}
        {dislikes}
        <i className="articleComment">
          <Icon disabled link size="small" fitted name="comments outline" />
          <span>{numberofcomments}</span>
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
  totalArticleReactions: PropTypes.object.isRequired,
  articleReaction: PropTypes.func.isRequired
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
