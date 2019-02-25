import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProfileMenu.scss';

function ProfileMenu(props) {
  const { text, to, count, menuItem } = props;
  if (text) {
    return (
      <Link className="menu-item profileMenu" to={to}>
        {menuItem}
        <div className="profileMenuText">
          {text}
          <span className={count ? 'count' : 'hidden'}>{count}</span>
        </div>
      </Link>
    );
  }
  return <div className="menu-item profileMenu">{menuItem}</div>;
}

ProfileMenu.defaultProps = {
  text: '',
  count: '',
  to: ''
};

ProfileMenu.propTypes = {
  text: PropTypes.string,
  count: PropTypes.string,
  menuItem: PropTypes.object.isRequired,
  to: PropTypes.string
};

export default ProfileMenu;
