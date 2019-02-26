import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setToken } from '../../helpers/jwt';

export default class Verification extends React.Component {
  componentDidMount() {
    const { history } = this.props;
    setToken(history.location.search);
  }

  render() {
    return <Redirect to="/" />;
  }
}
Verification.propTypes = {
  history: PropTypes.object
};
Verification.defaultProps = {
  history: { location: { search: 'sampleTOken' } }
};
