import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Rating } from 'semantic-ui-react';
import Reactions from './ReactionIcons';

export default function Icons(props) {
  const { selectedArticleId, ratingIcon, numberofcomments, date, name, rating, disabled } = props;
  return (
    <Menu className="widgetContainer">
      <div className="icons">
        {ratingIcon ? (
          <React.Fragment>
            <Reactions date={date} selectedArticleId={selectedArticleId} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Reactions date={date} selectedArticleId={selectedArticleId} />
            <Icon disabled link size="small" name="bookmark outline" />
            <span>{numberofcomments}</span>
            <div className="rating">
              <Rating disabled={disabled} maxRating={5} defaultRating={rating} size="small" />
              {name ? <span>{name}</span> : ''}
            </div>
          </React.Fragment>
        )}
      </div>
    </Menu>
  );
}
Icons.defaultProps = {
  selectedArticleId: 1,
  name: 'author-name',
  date: 'current-date',
  ratingIcon: 'rating-class',
  numberofcomments: 0,
  rating: 0,
  disabled: false
};
Icons.propTypes = {
  selectedArticleId: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  ratingIcon: PropTypes.string,
  numberofcomments: PropTypes.number,
  rating: PropTypes.number,
  disabled: PropTypes.bool
};
