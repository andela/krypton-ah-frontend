import React from 'react';
import { Form, Checkbox, Button } from 'semantic-ui-react';
import InlineError from '../../helpers/InlineError';
import { signInValidator } from '../../helpers/validate';

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
    const { user, errors } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input type="email" className="email" fluid placeholder="Email Address" name="email" value={user.email} onChange={this.handleChange} required />
        </Form.Group>
        {errors.email && <InlineError text={errors.email} />}
        <Form.Group widths="equal">
          <Form.Input fluid type="password" placeholder="Password" value={user.password} name="password" onChange={this.handleChange} required />
        </Form.Group>
        {errors.password && <InlineError text={errors.password} />}
        <Form.Field>
          <Checkbox label="Remember me" />
        </Form.Field>
        <Button type="submit" basic fluid huge="true" onClick={this.handleSubmit}>
          Sign In
        </Button>
      </Form>
    );
  }
}

export default SignIn;
