import React, { Component, Fragment } from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { dateFormatter } from '../../helpers/articleInfoFormatter';
import { getTotalReactions, articleReaction } from '../../actions/articleReactionsAction';

class ReactionIcons extends Component {
  state = {
    likeClicked: false,
    dislikeClicked: false
  };

  componentDidMount = () => {
    this.props.getTotalReactions(this.props.selectedArticleId);
  };

  createLikeIcon = (outline = 'outline') => {
    const name = outline.length === 0 ? 'thumbs up' : `thumbs up ${outline}`;
    return (
      <i role="presentation" onClick={this.createReaction.bind(this, 'like')}>
        <Icon disabled link size="small" fitted name={`thumbs up ${name}`} />
      </i>
    );
  };

  createDislikeIcon = (outline = 'outline') => {
    const name = outline.length === 0 ? 'thumbs down' : `thumbs down ${outline}`;
    return (
      <i role="presentation" onClick={this.createReaction.bind(this, 'dislike')}>
        <Icon disabled link size="small" fitted name={`thumbs down ${name}`} />
      </i>
    );
  };

  createReaction = (reaction) => {
    this.props.articleReaction(this.props.selectedArticleId, reaction);
  };

  render() {
    const { date, numberofcomments, totalArticleReactions } = this.props;
    const { likes, dislikes } = totalArticleReactions.successResponse;
    const { likeClicked, dislikeClicked } = this.state;
    const outline = '';
    return (
      <Fragment>
        <Icon disabled link size="small" fitted name="time">
          <span>{dateFormatter(date)}</span>
        </Icon>
        {likeClicked ? this.createLikeIcon(outline) : this.createLikeIcon()}
        <span>{likes}</span>
        {dislikeClicked ? this.createDislikeIcon(outline) : this.createDislikeIcon()}
        <span>{dislikes}</span>
        <i className="articleComment">
          <Icon disabled link size="small" fitted name="comments outline" />
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
  articleReaction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  totalArticleReactions: state.totalArticleReactions
});

export { ReactionIcons as ReactionIconsPage };
export default connect(
  mapStateToProps,
  { getTotalReactions, articleReaction }
)(ReactionIcons);
