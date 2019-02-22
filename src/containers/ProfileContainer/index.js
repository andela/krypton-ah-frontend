import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Image } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { getUserIdFromLocalStorage } from '../../helpers/jwt';
import ProfileNavBar from '../../components/ProfileNavBar';
import UserProfile from '../../components/UserProfile';
import profileImagePlaceholder from '../../images/avatar.png';
import { fetchUser, updateUserProfile } from '../../actions/userActions';
import Loader from '../../components/Loader';
import './ProfileContainer.scss';

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userFetched: false
    };
    this.getUserType = this.getUserType.bind(this);
    this.renderProfileHero = this.renderProfileHero.bind(this);
    this.renderPageBody = this.renderPageBody.bind(this);
    this.renderProfileView = this.renderProfileView.bind(this);
  }

  componentDidMount() {
    const { getUser, userId } = this.props;
    getUser(userId);
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ userFetched: true });
  }

  getUserType(userId) {
    const currentUserId = getUserIdFromLocalStorage();
    if (!currentUserId) {
      return 'unauthenticated';
    }
    if (userId === currentUserId) {
      return 'owner';
    }
    return 'authenticated';
  }

  renderProfileHero(profileImage, lastname, firstname, bio) {
    return (
      <Grid>
        <Grid.Row centered>
          <Image src={profileImage || profileImagePlaceholder} circular />
        </Grid.Row>
        <Grid.Row centered>
          <div>
            <div className="userName">{`${lastname} ${firstname}`}</div>
            <div className="userDescription">{bio}</div>
          </div>
        </Grid.Row>
      </Grid>
    );
  }

  renderProfileView() {
    const { profileData, updateProfile, updateIsLoading, userId } = this.props;
    const user = this.getUserType(userId);
    return (
      <UserProfile
        updateUser={updateProfile}
        updateIsLoading={updateIsLoading}
        profileData={profileData}
        user={user}
      />
    );
  }

  renderPageBody() {
    return (
      <Grid centered columns={2}>
        <Router>
          <Switch>
            <Route render={this.renderProfileView} path="/" />
          </Switch>
        </Router>
      </Grid>
    );
  }

  render() {
    const { profileData, fetchIsLoading, userId } = this.props;
    const { firstname, lastname, profileImage, bio, id } = profileData;
    const { userFetched } = this.state;
    const user = this.getUserType(userId);
    if (fetchIsLoading) {
      return <Loader />;
    }
    if (!id && userFetched) {
      return <Redirect to="/not-found" />;
    }
    return (
      <Grid className="userProfilePage">
        <Grid.Row centered className="userProfile">
          {this.renderProfileHero(profileImage, lastname, firstname, bio)}
        </Grid.Row>
        <ProfileNavBar userId={userId} user={user} />
        <Grid.Row centered>{this.renderPageBody()}</Grid.Row>
        <Grid.Row />
      </Grid>
    );
  }
}

ProfileContainer.defaultProps = {
  profileData: {}
};

ProfileContainer.propTypes = {
  profileData: PropTypes.object,
  getUser: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  updateProfile: PropTypes.func.isRequired,
  updateIsLoading: PropTypes.bool.isRequired,
  fetchIsLoading: PropTypes.bool.isRequired
};

const mapDispatchToProps = dispatch => ({
  getUser: userId => dispatch(fetchUser(userId)),
  updateProfile: (payload, create) => dispatch(updateUserProfile(payload, create))
});

const userProfileExistProps = (noProfileProps, neededData) => {
  const profileData = {
    ...noProfileProps.profileData,
    ...neededData,
    noProfile: false,
    profileImage: neededData.avatar
  };
  return {
    ...noProfileProps,
    profileData
  };
};

const mapStateToProps = (state) => {
  const { userReducer } = state;
  const { firstname, lastname, userprofile, id, fetchIsLoading, updateIsLoading } = userReducer;
  const noProfileProps = {
    fetchIsLoading,
    updateIsLoading,
    profileData: {
      firstname,
      lastname,
      id,
      noProfile: true
    }
  };
  if (!userprofile) {
    return noProfileProps;
  }
  const { UserId, createdAt, emailnotification, updatedAt, ...neededData } = userprofile;
  return userProfileExistProps(noProfileProps, neededData);
};

export { ProfileContainer as ProfilePageContainer };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
