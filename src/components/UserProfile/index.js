import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { profileFormGroups } from '../../constants/userProfile';
import './UserProfile.scss';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      country: '',
      phonenumber: '',
      gender: '',
      username: '',
      bio: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.renderFromGroups = this.renderFromGroups.bind(this);
    this.renderTextArea = this.renderTextArea.bind(this);
    this.renderUpdateButton = this.renderUpdateButton.bind(this);
  }

  componentWillMount() {
    const { profileData } = this.props;
    this.setState({ ...profileData });
  }

  componentWillReceiveProps(nextProps) {
    const { profileData } = nextProps;
    this.setState({ ...profileData });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(state => ({
      ...state,
      [name.replace(' ', '')]: value
    }));
  }

  handleSelect(event, data) {
    const { name, value } = data;
    this.setState(state => ({
      ...state,
      [name]: value
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    const { updateUser, profileData } = this.props;
    const { state } = this;
    const update = Object.keys(state).reduce((prev, key) => {
      if (state[key] !== profileData[key]) {
        prev[key] = state[key];
      }
      return prev;
    }, {});
    if (Object.keys(update).length === 0) {
      return;
    }
    const res = state.username ? updateUser(update) : updateUser(update, true);
    return res;
  }

  renderFormElement(formElement, disabled) {
    const { element, name, type } = formElement;
    const { state } = this;
    return element === 'input' ? (
      <Form.Input
          disabled={disabled}
          id={name}
          size="massive"
          name={name}
          onChange={this.handleChange}
          placeholder={name.toUpperCase()}
          type={type}
          value={state[name.replace(' ', '')]}
        />
    ) : (
      <Form.Select
          disabled={disabled}
          id={name}
          name={name}
          value={state[name]}
          onChange={this.handleSelect}
          options={formElement.options}
          size="massive"
          placeholder={name.toUpperCase()}
        />
    );
  }

  renderFromGroups(disabled) {
    return profileFormGroups.map((formGroup) => {
      const [leftFormElement, rightFormElement] = formGroup;
      return (
        <Form.Group key={leftFormElement.name} widths="equal">
          <Form.Field>
            <label htmlFor={leftFormElement.name}>{leftFormElement.name.toLocaleUpperCase()}</label>
            {this.renderFormElement(leftFormElement, disabled)}
          </Form.Field>
          <Form.Field>
            <label htmlFor={rightFormElement.name}>
              {rightFormElement.name.toLocaleUpperCase()}
            </label>
            {this.renderFormElement(rightFormElement, disabled)}
          </Form.Field>
        </Form.Group>
      );
    });
  }

  renderTextArea(disabled, bio) {
    return (
      <Form.Field className="bioField">
        <label htmlFor="bio">BIO</label>
        <Form.TextArea
          id={bio}
          disabled={disabled}
          name="bio"
          onChange={this.handleChange}
          className="bio"
          autoHeight
          placeholder="Bio"
          value={bio}
        />
      </Form.Field>
    );
  }

  renderUpdateButton(user) {
    const { updateIsLoading } = this.props;
    const updateButton = user === 'owner' ? (
      <Form.Button size="massive" className="btnRight" basic>
        {updateIsLoading ? 'UPDATING' : 'UPDATE'}
      </Form.Button>
    ) : null;
    return updateButton;
  }

  render() {
    const { bio } = this.state;
    const { user } = this.props;
    let disabled = true,
      title = 'PROFILE';
    if (user === 'owner') {
      disabled = false;
      title = 'EDIT PROFILE';
    }
    return (
      <React.Fragment>
        <h3>{title}</h3>
        <Form onSubmit={this.handleSubmit} className="profileForm">
          {this.renderFromGroups(disabled)}
          {this.renderTextArea(disabled, bio)}
          {this.renderUpdateButton(user)}
        </Form>
      </React.Fragment>
    );
  }
}

UserProfile.defaultProps = {
  updateUser: () => {},
  user: '',
  updateIsLoading: false
};

UserProfile.propTypes = {
  profileData: PropTypes.object.isRequired,
  updateUser: PropTypes.func,
  user: PropTypes.string,
  updateIsLoading: PropTypes.bool
};

export default UserProfile;
