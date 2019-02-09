import React from 'react';
import { Form, Checkbox, Button } from 'semantic-ui-react';

class SignIn extends React.Component {
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Field>
            <input
            type="email"
            required
            name="email"
            value={email}
            placeholder="Email Address"
            onChange={this.handleChange.bind(this)}
          />
          </Form.Field>
          <Form.Field>
            <input
            type="password"
            required
            name="password"
            value={password}
            placeholder="Password"
            onChange={this.handleChange.bind(this)}
          />
          </Form.Field>
          <Form.Field>
            <Checkbox label="Remember me" />
          </Form.Field>
          <Button onClick={this.handleSubmit.bind(this)} type="submit" basic fluid huge="true">Sign In</Button>
        </Form>
      </div>
    );
  }
}

export default SignIn;
