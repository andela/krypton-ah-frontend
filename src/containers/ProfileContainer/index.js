import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Image } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { getUserIdFromLocalStorage } from '../../helpers/jwt';
import ProfileNavBar from '../../components/ProfileNavBar';
import UserProfile from '../../components/UserProfile';
import profileImagePlaceholder from '../../images/avatar.png';
import * as userActions from '../../actions/userActions';
import Loader from '../../components/Loader';
import './ProfileContainer.scss';
import UploadImage from '../../components/UploadImage';

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
    const { fetchUser, userId } = this.props;
    fetchUser(userId);
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
    const { newProfileImage, userId } = this.props;
    const previewUrl = newProfileImage ? newProfileImage.previewUrl : '';
    const hidden = !(this.getUserType(userId) === 'owner');
    return (
      <Grid>
        <Grid.Row centered>
          <Image src={previewUrl || profileImage || profileImagePlaceholder} circular />
          <UploadImage hidden={hidden} />
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
    let imageFile;
    const { profileData, updateUserProfile, updateIsLoading, userId, newProfileImage } = this.props;
    if (newProfileImage) {
      imageFile = newProfileImage ? newProfileImage.imageFile : null;
    }
    const user = this.getUserType(userId);
    return (
      <UserProfile
        updateUser={updateUserProfile}
        updateIsLoading={updateIsLoading}
        profileData={profileData}
        user={user}
        imageFile={imageFile}
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
  profileData: {},
  newProfileImage: null
};

ProfileContainer.propTypes = {
  profileData: PropTypes.object,
  fetchUser: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  updateUserProfile: PropTypes.func.isRequired,
  updateIsLoading: PropTypes.bool.isRequired,
  fetchIsLoading: PropTypes.bool.isRequired,
  newProfileImage: PropTypes.object
};

const mapDispatchToProps = dispatch => ({ ...bindActionCreators(userActions, dispatch) });
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
  const {
    firstname,
    lastname,
    userprofile,
    id,
    fetchIsLoading,
    updateIsLoading,
    newProfileImage
  } = userReducer;
  const noProfileProps = {
    fetchIsLoading,
    updateIsLoading,
    newProfileImage,
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
