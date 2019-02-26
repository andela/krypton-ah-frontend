import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class ReactionIcons extends Component {
  state = {
    like: false,
    dislike: false
  };

  checkPreviousState = previousState => (previousState ? false : previousState);

  handleLikeAction = () => {
    const { like, dislike } = this.state;
    const returnedState = this.checkPreviousState(dislike);
    this.setState({
      like: !like,
      dislike: returnedState
    });
  };

  handleDislikeAction = () => {
    const { like, dislike } = this.state;
    const returnedState = this.checkPreviousState(like);
    this.setState({
      dislike: !dislike,
      like: returnedState
    });
  };

  likeArticle = (outline = 'outline') => {
    const name = outline.length === 0 ? 'thumbs up' : `thumbs up ${outline}`;
    return (
      <i onClick={this.handleLikeAction} role="presentation">
        <Icon disabled link size="small" fitted name={`thumbs up ${name}`} />
      </i>
    );
  };

  dislikeArticle = (outline = 'outline') => {
    const name = outline.length === 0 ? 'thumbs down' : `thumbs down ${outline}`;
    return (
      <i onClick={this.handleDislikeAction} role="presentation">
        <Icon disabled link size="small" fitted name={`thumbs down ${name}`} />
      </i>
    );
  };

  render() {
    const { date, numberoflikes, numberofdislikes, numberofcomments } = this.props;
    const { like, dislike } = this.state;
    const outline = '';
    return (
      <div>
        <React.Fragment>
          <i className="dates">{date}</i>
          {like ? this.likeArticle(outline) : this.likeArticle()}
          {numberoflikes}
          {dislike ? this.dislikeArticle(outline) : this.dislikeArticle()}
          {numberofdislikes}
          <i>
            <Icon disabled link size="small" fitted name="comments outline" />
          </i>
          {numberofcomments}
        </React.Fragment>
      </div>
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
  numberofcomments: PropTypes.number
};
