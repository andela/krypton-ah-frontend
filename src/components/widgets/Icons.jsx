import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Rating } from 'semantic-ui-react';
import Reactions from './ReactionIcons';

export default function Icons(props) {
  const { ratingIcon, numberofcomments } = props;
  return (
    <Menu className="widgetContainer">
      <div className="icons">
        {ratingIcon ? (
          <React.Fragment>
            <Reactions />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Reactions />
            <Icon disabled link size="small" name="bookmark outline" />
            {numberofcomments}
            <Rating disabled maxRating={5} defaultRating={3} icon="star" size="small" />
          </React.Fragment>
        )}
      </div>
    </Menu>
  );
}
Icons.defaultProps = {
  ratingIcon: 'rating-class',
  numberofcomments: 23
};
Icons.propTypes = {
  ratingIcon: PropTypes.string,
  numberofcomments: PropTypes.number
};
