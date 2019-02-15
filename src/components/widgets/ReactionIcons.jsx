import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default function ReactionIcons({
  date, numberoflikes, numberofdislikes, numberofcomments
}) {
  return (
    <div>
      <React.Fragment>
        <i className="dates">{date}</i>
        <Icon disabled link size="small" fitted name="thumbs up outline" />
        {numberoflikes}
        <Icon disabled link size="small" fitted name="thumbs down outline" />
        {numberofdislikes}
        <Icon disabled link size="small" fitted name="comments outline" />
        {numberofcomments}
      </React.Fragment>
    </div>
  );
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
