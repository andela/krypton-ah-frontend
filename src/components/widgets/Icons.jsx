import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Rating } from 'semantic-ui-react';
import Reactions from './ReactionIcons';

export default function Icons(props) {
  const { ratingIcon, date } = props;
  return (
    <Menu className="widgetContainer">
      <div className="Icons">
        {ratingIcon ? (
          <React.Fragment>
            <Reactions date={date} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Reactions date={date} />
            <div className="rating">
              <Rating disabled maxRating={5} defaultRating={3} icon="star" size="small" />
              <span>name</span>
            </div>
          </React.Fragment>
        )}
      </div>
    </Menu>
  );
}
Icons.defaultProps = {
  ratingIcon: 'rating-class',
  date: 23
};
Icons.propTypes = {
  ratingIcon: PropTypes.string,
  date: PropTypes.number
};
