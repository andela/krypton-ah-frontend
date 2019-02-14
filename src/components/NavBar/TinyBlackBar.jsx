import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Visibility } from 'semantic-ui-react';
import SocialMediaIcons from '../SocialMediaIcons';

export default function TinyBlackNavBar({ stickTopMenu, unStickTopMenu }) {
  return (
    <Visibility onBottomPassed={stickTopMenu} onBottomVisible={unStickTopMenu} once={false}>
      <Menu position="relative" className="tinyBlackNavBar">
        <SocialMediaIcons iconSize="small" position="right" />
      </Menu>
    </Visibility>
  );
}

TinyBlackNavBar.defaultProps = {
  stickTopMenu: null,
  unStickTopMenu: null
};

TinyBlackNavBar.propTypes = {
  stickTopMenu: PropTypes.func,
  unStickTopMenu: PropTypes.func
};
