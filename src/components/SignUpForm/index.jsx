import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import FormInput from '../FormInputGroup';
import InlineError from '../../helpers/InlineError';
import { validate } from '../../helpers/validateUser';
import './SignUpForm.scss';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstname: '',
        lastname: '',
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
    const errors = validate(user);

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

  userSignUpForm(user, errors) {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal" className="name-fields">
          <div className="formGroup">
            <FormInput type="text" placeholder="Firstname" name="firstname" value={user.firstname} handleChange={this.handleChange} />
            {errors.firstname && <InlineError text={errors.firstname} />}
          </div>
          <div className="formGroup">
            <FormInput type="text" placeholder="Lastname" value={user.lastname} name="lastname" handleChange={this.handleChange} />
            {errors.lastname && <InlineError text={errors.lastname} />}
          </div>
        </Form.Group>
        <Form.Group widths="equal">
          <FormInput type="email" error={!!errors.email} name="email" placeholder="Email Address" value={user.email} handleChange={this.handleChange} />
        </Form.Group>
        {errors.email && <InlineError text={errors.email} />}
        <Form.Group widths="equal">
          <FormInput type="password" name="password" placeholder="Password" value={user.password} handleChange={this.handleChange} />
        </Form.Group>
        {errors.password && <InlineError text={errors.password} />}
        <Button type="submit" basic fluid huge="true" onClick={this.handleSubmit}>Sign Up</Button>
      </Form>
    );
  }

  render() {
    const { user, errors } = this.state;

    return (
      this.userSignUpForm(user, errors)
    );
  }
}

export default SignUpForm;
