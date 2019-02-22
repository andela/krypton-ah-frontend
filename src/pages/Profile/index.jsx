import React from 'react';
import PropTypes from 'prop-types';
import ProfileContainer from '../../containers/ProfileContainer';

function Profile({ match }) {
  const { userId } = match.params;
  return <ProfileContainer userId={userId} />;
}

Profile.propTypes = {
  match: PropTypes.object
};

Profile.defaultProps = {
  match: { params: {} }
};

export default Profile;
