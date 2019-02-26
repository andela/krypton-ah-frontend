import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { AuthRoute, UnauthRoute } from 'react-router-auth';
import { connect } from 'react-redux';
import { isUserAuthenticated, getUserIdFromLocalStorage } from '../../helpers/jwt';
import { fetchOwner } from '../../actions/userActions';

class RouteManager extends Component {
  constructor(props) {
    super(props);
    this.renderNavBar = this.renderNavBar.bind(this);
  }

  renderNavBar(isAuthenticated, avatarUrl) {
    return <navBar isAuthenticated={isAuthenticated} avatarUrl={avatarUrl} />;
  }

  render() {
    const { exact, path, isAuthenticated, component, redirectTo, routeType, getOwner } = this.props;
    if (isUserAuthenticated()) {
      const userId = getUserIdFromLocalStorage();
      if (getOwner) {
        getOwner(userId);
      }
    }
    let CurrentRoute;
    switch (routeType) {
      case 'authenticated':
        CurrentRoute = (
          <AuthRoute
            authenticated={isAuthenticated}
            redirectTo={redirectTo}
            path={path}
            component={component}
            exact={exact}
          />
        );
        break;
      case 'unAuthenticated':
        CurrentRoute = (
          <UnauthRoute
            authenticated={isAuthenticated}
            redirectTo={redirectTo}
            path={path}
            component={component}
            exact={exact}
          />
        );
        break;
      default:
        CurrentRoute = <Route path={path} component={component} exact={exact} />;
    }
    return <React.Fragment>{CurrentRoute}</React.Fragment>;
  }
}

const mapDispatchToProps = dispatch => ({
  getOwner: userId => dispatch(fetchOwner(userId))
});

const mapStateToProps = (state) => {
  const { authReducer } = state;
  const { isAuthenticated } = authReducer;
  return {
    isAuthenticated
  };
};

RouteManager.defaultProps = {
  exact: false,
  getOwner: null,
  isAuthenticated: false,
  redirectTo: '/',
  routeType: null
};

RouteManager.propTypes = {
  exact: PropTypes.bool,
  getOwner: PropTypes.func,
  path: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool,
  component: PropTypes.node.isRequired,
  redirectTo: PropTypes.string,
  routeType: PropTypes.oneOf(['authenticated, unauthenticated'])
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteManager);
