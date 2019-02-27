/* eslint-disable react/destructuring-assignment */
import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { accountActivation } from '../../actions/authAction/authActions';
import {
  activationResponse,
  alreadyActivatedResponse
} from '../../constants';
import RedirectLoader from '../Loader';

let response = activationResponse;
class AccountVerification extends React.Component {
  componentDidMount() {
    const { history } = this.props;
    const token = history.location.search.split('=')[1];
    if (!token) {
      response = alreadyActivatedResponse;
    }
    const { activate } = this.props;
    activate(token, response);
  }

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
AccountVerification.propTypes = {
  history: PropTypes.object
};
AccountVerification.defaultProps = {
  history: {}
};

const mapDispatchToProps = dispatch => ({
  activate: token => dispatch(accountActivation(response, token))
});

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated
});

export { AccountVerification as Verification };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountVerification);

AccountVerification.propTypes = {
  history: PropTypes.object,
  activate: PropTypes.func,
  isAuthenticated: PropTypes.bool
};

AccountVerification.defaultProps = {
  history: {},
  activate: null,
  isAuthenticated: null
};
