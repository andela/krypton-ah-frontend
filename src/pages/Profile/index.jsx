import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getUserIdFromLocalStorage } from '../../helpers/jwt';
import ProfileNavBar from '../../components/ProfileNavBar';
import UserProfile from '../../components/UserProfile';
import profileImagePlaceholder from '../../images/avatar.png';
import { profileData as profileDataMock } from '../../mockData';
import './Profile.scss';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.getUserType = this.getUserType.bind(this);
    this.renderProfileHero = this.renderProfileHero.bind(this);
    this.renderPageBody = this.renderPageBody.bind(this);
    this.renderProfileView = this.renderProfileView.bind(this);
  }

  getUserType(userId) {
    const ownerId = getUserIdFromLocalStorage();
    if (!ownerId) {
      return 'unauthenticated';
    }
    if (userId === ownerId) {
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
    const { profileData } = this.props;
    const { id } = profileData;
    const user = this.getUserType(id);
    return <UserProfile profileData={profileData} user={user} />;
  }

  renderPageBody() {
    return (
      <Grid centered columns={2}>
        <Router>
          <Switch>
            <Route
              render={this.renderProfileView}
              path="/profile"
            />
          </Switch>
        </Router>
      </Grid>
    );
  }

  render() {
    const { profileData } = this.props;
    const { firstname, lastname, profileImage, bio, id } = profileData;
    const user = this.getUserType(id);
    return (
      <Grid className="userProfilePage">
        <Grid.Row centered className="userProfile">
          {this.renderProfileHero(profileImage, lastname, firstname, bio)}
        </Grid.Row>
        <ProfileNavBar user={user} />
        <Grid.Row centered>
          {this.renderPageBody()}
        </Grid.Row>
        <Grid.Row />
      </Grid>
    );
  }
}

Profile.defaultProps = {
  profileData: profileDataMock
};

Profile.propTypes = {
  profileData: PropTypes.object
};

export default Profile;
