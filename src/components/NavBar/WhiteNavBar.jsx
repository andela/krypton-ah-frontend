import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Dropdown, Image, Menu, Icon, Button } from 'semantic-ui-react';
<<<<<<< HEAD
import 'react-toastify/dist/ReactToastify.css';
=======
import { connect } from 'react-redux';
>>>>>>> [fix-#1624141852] Implement authentication for routes
import AHIcon from '../../images/Logo.png';
import avatarPlaceholder from '../../images/avatar.png';

function WhiteNavBar({ fixed, isAuthenticated, avatarUrl, userId }) {
  return (
    <Fragment>
      <ToastContainer autoClose={5000} />
      <Menu fixed={fixed ? 'top' : null} borderless className="whiteNavBar">
        <Menu.Menu position="left" className="whiteBarMenu">
          <Menu.Item>
<<<<<<< HEAD
            <Image alt="AH-logo" className="ahIcon" src={AHIcon} />
=======
            <Dropdown
              pointing
              simple
              item
              className="link item"
              trigger={<Image src={avatarUrl} avatar className="avatarImg" />}
            >
              <Dropdown.Menu className="right">
                <Dropdown.Item as="a" href={`/profile/${userId}`}>PROFILE</Dropdown.Item>
                <Dropdown.Item>BOOKMARKS</Dropdown.Item>
                <Dropdown.Item>LOG OUT</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
>>>>>>> [fix-#1624141852] Implement authentication for routes
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
            <Link to="/login">
              <Button secondary>Write an Article</Button>
            </Link>
          </Menu.Item>
          {isAuthenticated ? (
            <Menu.Item>
              <Dropdown
                pointing
                simple
                item
                className="link item"
                trigger={<Image src={avatarUrl} avatar className="avatarImg" />}>
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
    </Fragment>
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
  avatarUrl: PropTypes.string,
  userId: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  const { userReducer, authReducer } = state;
  const { profileImage, userId } = userReducer;
  const { isAuthenticated } = authReducer;
  return {
    avatarUrl: profileImage,
    isAuthenticated,
    userId
  };
};

export default connect(mapStateToProps)(WhiteNavBar);
