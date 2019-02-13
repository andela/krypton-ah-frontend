/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Rating } from 'semantic-ui-react';
import './reactionwidgets.scss';

export default function Icons(props) {
  const { date, ratingIcon, numberoflikes, numberofdislikes } = props;
  return (
    <div>
      <Menu className="widgetContainer">
        <div className="Icons">
          <i className="dates">{date}</i>
          <Icon link disabled size="small" fitted name="thumbs up outline" />
          {numberoflikes}
          <Icon link disabled size="small" fitted name="thumbs down outline" />
          {numberofdislikes}
          <Icon link size="small" name="bookmark outline" />
          <Rating maxRating={5} defaultRating={3} icon="star" size="small" className={ratingIcon} />
        </div>
      </Menu>
    </div>
  );
}

Icons.defaultProps = {
  ratingIcon: 'rating-class',
  date: '28th february 2019',
  numberoflikes: 23,
  numberofdislikes: 23
};

Icons.propTypes = {
  ratingIcon: PropTypes.string,
  date: PropTypes.string,
  numberoflikes: PropTypes.number,
  numberofdislikes: PropTypes.number
};
