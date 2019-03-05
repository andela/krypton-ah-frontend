import React, { Component, Fragment } from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { dateFormatter } from '../../helpers/articleInfoFormatter';
import { getTotalReactions, articleReaction } from '../../actions/articleReactionsAction';

class ReactionIcons extends Component {
  state = {
    timeoutId: ''
  };

  componentDidMount = () => {
    this.props.getTotalReactions(this.props.selectedArticleId);
  };

  componentWillUnmount = () => {
    clearTimeout(this.state.timeoutId);
  };

  createReactionIcon = (reaction, position) => (
    <i role="presentation" onClick={this.createReaction.bind(this, reaction)}>
      <Icon disabled link size="small" fitted name={`thumbs ${position} outline`} />
    </i>
  );

  createReaction = (newReaction) => {
    this.props.articleReaction(this.props.selectedArticleId, newReaction);
    const timeoutId = setTimeout(
      () => this.props.getTotalReactions(this.props.selectedArticleId),
      100
    );
    this.setState({ timeoutId });
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
        {this.createReactionIcon('like', 'up')}
        {likes}
        {this.createReactionIcon('dislike', 'down')}
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
