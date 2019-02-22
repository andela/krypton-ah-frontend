import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { dateFormatter } from '../../helpers/articleInfoFormatter';

export default function ReactionIcons({ date, numberoflikes, numberofdislikes, numberofcomments }) {
  return (
    <div className="reactionIcons">
      <React.Fragment>
        <Icon disabled link size="small" fitted name="time">
          {dateFormatter(date)}
        </Icon>
        <Icon disabled link size="small" fitted name="thumbs up outline">
          <span>{numberoflikes}</span>
        </Icon>
        <Icon disabled link size="small" fitted name="thumbs down outline">
          <span>{numberofdislikes}</span>
        </Icon>
        <Icon disabled link size="small" fitted name="comments outline">
          <span>{numberofcomments}</span>
        </Icon>
      </React.Fragment>
    </div>
  );
}
ReactionIcons.defaultProps = {
  date: '28th february 2019',
  numberoflikes: 0,
  numberofdislikes: 0,
  numberofcomments: 0
};

ReactionIcons.propTypes = {
  date: PropTypes.string,
  numberoflikes: PropTypes.number,
  numberofdislikes: PropTypes.number,
  numberofcomments: PropTypes.number
};
