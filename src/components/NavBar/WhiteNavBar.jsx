import React from 'react';
import PropTypes from 'prop-types';
import {
  Dropdown,
  Image,
  Menu,
  Icon,
  Button
} from 'semantic-ui-react';
import AHIcon from '../../images/Logo.png';
import avatarPlaceholder from '../../images/avatar.png';

export default function WhiteNavBar({ fixed, isAuthenticated, avatarUrl }) {
  return (
    <Menu fixed={fixed ? 'top' : null} borderless className="whiteNavBar">
      <Menu.Menu position="left" className="whiteBarMenu">
        <Menu.Item>
          <Image alt="AH-logo" className="ahIcon" src={AHIcon} />
        </Menu.Item>
        <Menu.Item>
          <h1>Authors Haven</h1>
        </Menu.Item>
      </Menu.Menu>
      <Menu.Menu position="right">
        <Menu.Item>
          <Icon fitted size="big" name="search" />
        </Menu.Item>
        <Menu.Item>
          <Button secondary>Write an Article</Button>
        </Menu.Item>
        {isAuthenticated ? (
          <Menu.Item>
            <Dropdown
              pointing
              simple
              item
              className="link item"
              trigger={<Image src={avatarUrl} avatar className="avatarImg" />}
            >
              <Dropdown.Menu className="right">
                <Dropdown.Item>PROFILE</Dropdown.Item>
                <Dropdown.Item>BOOKMARKS</Dropdown.Item>
                <Dropdown.Item>LOG OUT</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        ) : null}
      </Menu.Menu>
    </Menu>
  );
}

WhiteNavBar.defaultProps = {
  avatarUrl: avatarPlaceholder,
  isAuthenticated: false,
  fixed: false
};

WhiteNavBar.propTypes = {
  fixed: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  avatarUrl: PropTypes.string
};
