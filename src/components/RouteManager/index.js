import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { AuthRoute, UnauthRoute } from 'react-router-auth';
import { connect } from 'react-redux';
import { isUserAuthenticated, getUserIdFromLocalStorage } from '../../helpers/jwt';
import { fetchCurrentUser } from '../../actions/userActions';
import Loading from '../Loader';

function routeToRender(routeType) {
  switch (routeType) {
    case 'authenticated':
      return AuthRoute;
    case 'unAuthenticated':
      return UnauthRoute;
    default:
      return Route;
  }
}

function RouteManager(props) {
  const { exact, path, isAuthenticated, component, redirectTo, routeType, getCurrentUser } = props;
  if (isUserAuthenticated() && !isAuthenticated) {
    const userId = getUserIdFromLocalStorage();
    if (getCurrentUser) {
      getCurrentUser(userId);
      return <Loading />;
    }
  }

  const RouteToRender = routeToRender(routeType);
  return (
    <RouteToRender
      authenticated={isAuthenticated}
      redirectTo={redirectTo}
      path={path}
      component={component}
      exact={exact}
    />
  );
}

const mapDispatchToProps = dispatch => ({
  getCurrentUser: userId => dispatch(fetchCurrentUser(userId))
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
  getCurrentUser: null,
  isAuthenticated: false,
  redirectTo: '/',
  routeType: null
};

RouteManager.propTypes = {
  exact: PropTypes.bool,
  getCurrentUser: PropTypes.func,
  path: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool,
  component: PropTypes.func.isRequired,
  redirectTo: PropTypes.string,
  routeType: PropTypes.oneOf(['authenticated', 'unAuthenticated'])
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteManager);
