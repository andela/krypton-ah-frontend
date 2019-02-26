import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Image } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
    this.getUserType = this.getUserType.bind(this);
    this.renderProfileHero = this.renderProfileHero.bind(this);
    this.renderPageBody = this.renderPageBody.bind(this);
    this.renderProfileView = this.renderProfileView.bind(this);
  }

  componentWillMount() {
    const { getUser, userId } = this.props;
    getUser(userId);
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
<<<<<<< HEAD
            <Route render={this.renderProfileView} path="/" />
=======
            <Route render={this.renderProfileView} path="/profile" />
>>>>>>> [fix-#1624141852] Implement authentication for routes
          </Switch>
        </Router>
      </Grid>
    );
  }

  render() {
    const { profileData, fetchIsLoading, userId } = this.props;
    const { firstname, lastname, avatar, bio } = profileData;
    const profileImage = avatar;
    const user = this.getUserType(userId);
    if (fetchIsLoading) {
      return <Loader />;
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

const mapStateToProps = (state) => {
  const { userReducer } = state;
  const { firstname, lastname, userprofile, id, fetchIsLoading, updateIsLoading } = userReducer;
  const { UserId, createdAt, emailnotification, updatedAt, ...neededData } = userprofile;
  return {
    fetchIsLoading,
    updateIsLoading,
    profileData: {
      firstname,
      lastname,
      ...neededData,
      id
    }
  };
};

export { ProfileContainer as ProfilePageContainer };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
