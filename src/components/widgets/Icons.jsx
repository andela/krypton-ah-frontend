import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Rating } from 'semantic-ui-react';
import Reactions from './ReactionIcons';

export default function Icons({ id, ratingIcon, numberofcomments, date, name }) {
  return (
    <Menu className="widgetContainer">
      <div className="icons">
        {ratingIcon ? (
          <React.Fragment>
            <Reactions date={date} selectedArticleId={id} />
          </React.Fragment>
        ) : (
          <React.Fragment>
              <Reactions date={date} selectedArticleId={id} />
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
  id: 1,
  name: 'author-name',
  date: 'current-date',
  ratingIcon: 'rating-class',
  numberofcomments: 23
};
Icons.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  date: PropTypes.string,
  ratingIcon: PropTypes.string,
  numberofcomments: PropTypes.number
};
