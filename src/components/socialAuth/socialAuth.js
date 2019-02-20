/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import * as actions from '../../actions/authAction/socialLogin';
import RedirectLoader from '../Loader';

/**
  * @description SocialAuth
  * @extends {Component}
  */
export class SocialAuth extends Component {
/**
  * @method componentDidMount
  * @returns {boolean} new updated state
  */
  componentDidMount() {
    const { history } = this.props;
    const pathname = `${history.location.pathname}`;
    const token = `${history.location.search}`;
    this.props.socialLogin(token, pathname);
  }

  /**
    * @memberof SocialAuth
    * @returns {JSX} Html template
    */
  render() {
    return (
      <Fragment>
        <RedirectLoader />
        {this.props.isAuthenticated === true ? <Redirect to="/" /> : null}
        {this.props.isAuthenticated === false ? <Redirect to="/login" /> : null}
      </Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  isAuthenticated: state.socialLogin.isAuthenticated
});

export const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialAuth);

SocialAuth.propTypes = {
  history: PropTypes.object,
  socialLogin: PropTypes.func,
  isAuthenticated: PropTypes.bool
};
