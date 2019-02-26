import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class ReactionIcons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likeActive: true,
      dislikeActive: true
    };
  }

  likeArticle = (outline = 'outline') => {
    const name = outline.length === 0 ? 'thumbs up' : `thumbs up ${outline}`;
    return <Icon disabled link size="small" fitted name={name} />;
  };

  dislikeArticle = (outline = 'outline') => {
    const name = outline.length === 0 ? 'thumbs down' : `thumbs down ${outline}`;
    return <Icon disabled link size="small" fitted name={`thumbs down ${name}`} />;
  };

  render() {
    const { date, numberoflikes, numberofdislikes, numberofcomments } = this.props;
    const { likeActive, dislikeActive } = this.state;
    const outline = '';
    return (
      <div>
        <React.Fragment>
          <i className="dates">{date}</i>
          {likeActive ? this.likeArticle(outline) : this.likeArticle()}
          {numberoflikes}
          {dislikeActive ? this.dislikeArticle(outline) : this.dislikeArticle()}
          {numberofdislikes}
          <Icon disabled link size="small" fitted name="comments outline" />
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
