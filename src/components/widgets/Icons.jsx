import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Rating } from 'semantic-ui-react';
import Reactions from './ReactionIcons';

export default function Icons(props) {
  const { ratingIcon, numberofcomments, date, name } = props;
  return (
    <Menu className="widgetContainer">
      <div className="icons">
        {ratingIcon ? (
          <React.Fragment>
            <Reactions date={date} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Reactions date={date} />
            <Icon disabled link size="small" name="bookmark outline" />
            <span>{numberofcomments}</span>
            <div className="rating">
              <Rating disabled maxRating={5} defaultRating={3} icon="star" size="small" />
              <span>{name}</span>
            </div>
          </React.Fragment>
        )}
      </div>
    </Menu>
  );
}
Icons.defaultProps = {
  name: 'author-name',
  date: 'current-date',
  ratingIcon: 'rating-class',
  numberofcomments: 23
};
Icons.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  ratingIcon: PropTypes.string,
  numberofcomments: PropTypes.number
};
