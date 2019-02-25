import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Checkbox, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import InlineError from '../../helpers/InlineError';
import { signInValidator } from '../../helpers/validateUser';
import { userLogin } from '../../actions/authAction/authActions';
import RedirectLoader from '../Loader';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: ''
      },
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user } = this.state;
    const errors = signInValidator(user);
    if (errors) {
      this.setState({ errors });
    }
    const { login } = this.props;
    login(user);
  }

  handleChange(event) {
    const { user } = this.state;
    const { name, value } = event.target;
    user[name] = value;
    this.setState({
      user
    });
  }

  render() {
    const {
      user, errors
    } = this.state;

    if (this.props.auth.authIsLoading) { return <RedirectLoader />; }
    if (this.props.auth.isAuthenticated) { return <Redirect to="/writearticle" />; }
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            type="email" className="email" fluid placeholder="Email Address" name="email" value={user.email} onChange={this.handleChange} required
          />
        </Form.Group>
        {errors.email && <InlineError text={errors.email} />}
        <Form.Group widths="equal">
          <Form.Input
            fluid type="password" placeholder="Password" value={user.password} name="password" onChange={this.handleChange} required
          />
        </Form.Group>
        { errors.password && <InlineError text={errors.password} />}
        <Form.Field>
          <Checkbox label="Remember me" />
        </Form.Field>
        <Button type="submit" basic fluid huge="true" onClick={this.handleSubmit}>Sign In</Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(userLogin(user))
});

const mapStateToProps = state => ({
  auth: state.authReducer
});

export { SignIn as Login };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

SignIn.propTypes = {
  login: PropTypes.func,
  auth: PropTypes.object
};

SignIn.defaultProps = {
  login: null,
  auth: {}
};
