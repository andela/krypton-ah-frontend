import React, { Component } from 'react';
import {
  Button,
  Modal,
  Header,
  Form,
  Checkbox,
} from 'semantic-ui-react';

import './ModalComponent.scss';
import ModalHeader from '../ModalHeader';
import SocialIcons from '../SocialComponent';
import ModalDivider from '../ModalDivider';
import ModalFooter from '../ModalFooter';

class UserModal extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Login', JSON.stringify(this.state));
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <Modal size="tiny" trigger={<Button className="ui button black">Write An Article</Button>}>
          <Modal.Content>
            <ModalHeader title="sign in" />
            <Modal.Description>
              <Header />
              <Form>
                <Form.Field>
                  <input type="email" required name="email" value={email} placeholder="Email Address" onChange={this.handleChange.bind(this)} />
                </Form.Field>
                <Form.Field>
                  <input type="password" required name="password" value={password} placeholder="Password" onChange={this.handleChange.bind(this)} />
                </Form.Field>
                <Form.Field>
                  <Checkbox label="Remember me" />
                </Form.Field>
                <Button onClick={this.handleSubmit.bind(this)} type="submit" basic fluid huge="true">Sign In</Button>
              </Form>
              <ModalDivider title="Or Sign in with" />
              <SocialIcons />
              <ModalFooter title="Create an account. " link="Sign up" />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default UserModal;
