import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Dropdown, Image, Menu, Button } from 'semantic-ui-react';
import 'react-toastify/dist/ReactToastify.css';
import AHIcon from '../../images/Logo.png';
import avatarPlaceholder from '../../images/avatar.png';
import { setToken } from '../../helpers/jwt';
import SearchModal from '../../containers/SearchContainer/SearchModal';

export class WhiteNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.renderDropdownMenu = this.renderDropdownMenu.bind(this);
    this.renderLogoAndTitle = this.renderLogoAndTitle.bind(this);
  }

  logout() {
    setToken('');
  }

  renderLogoAndTitle() {
    return (
      <Menu.Menu as="a" href="/" position="left" className="whiteBarMenu">
        <Menu.Item>
          <Image alt="AH-logo" className="ahIcon" src={AHIcon} />
        </Menu.Item>
        <Menu.Item>
          <h1>Authors Haven</h1>
        </Menu.Item>
      </Menu.Menu>
    );
  }

  renderDropdownMenu() {
    const { avatarUrl, userId } = this.props;
    return (
      <Menu.Item>
        <Dropdown
          pointing
          simple
          item
          className="link item"
          trigger={<Image src={avatarUrl || avatarPlaceholder} avatar className="avatarImg" />}
        >
          <Dropdown.Menu className="right">
            <Dropdown.Item as="a" href={`/profile/${userId}`}>
              PROFILE
            </Dropdown.Item>
            <Dropdown.Item as="a" href={`/bookmarks/${userId}`}>
              BOOKMARKS
            </Dropdown.Item>
            <Dropdown.Item as="a" href={`${window.location.pathname}`} onClick={this.logout}>
              LOG OUT
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    );
  }

  render() {
    const { fixed, isAuthenticated } = this.props;
    return (
      <Fragment>
        <ToastContainer autoClose={5000} />
        <Menu fixed={fixed ? 'top' : null} borderless className="whiteNavBar">
          {this.renderLogoAndTitle()}
          <Menu.Menu position="right">
            <Menu.Item>
              <SearchModal />
            </Menu.Item>
            <Menu.Item>
              <Link to="/createarticle">
                <Button secondary>Write an Article</Button>
              </Link>
            </Menu.Item>
            {isAuthenticated ? this.renderDropdownMenu() : null}
          </Menu.Menu>
        </Menu>
      </Fragment>
    );
  }
}

WhiteNavBar.defaultProps = {
  avatarUrl: avatarPlaceholder,
  isAuthenticated: false,
  fixed: false,
  userId: ''
};

WhiteNavBar.propTypes = {
  fixed: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  avatarUrl: PropTypes.string,
  userId: PropTypes.string
};

const mapStateToProps = (state) => {
  const { userReducer, authReducer } = state;
  const { isAuthenticated } = authReducer;
  if (userReducer.currentUser) {
    const { profileImage, userId } = userReducer.currentUser;
    return {
      avatarUrl: profileImage,
      isAuthenticated,
      userId
    };
  }
  return {
    avatarUrl: '',
    isAuthenticated,
    userId: ''
  };
};

export default connect(mapStateToProps)(WhiteNavBar);
