import React from 'react';
import {
  Button,
  Modal,
  Header,
  Form,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './ModalComponent.scss';
import ModalHeader from '../ModalHeader';
import SocialIcons from '../SocialComponent';
import ModalDivider from '../ModalDivider';
import ModalFooter from '../ModalFooter';

function SignUpModal({ onChange, onClick }) {
  return (
    <div>
      <Modal
        size="tiny"
        trigger={(
          <Button className="ui button black">
          Write An Article
          </Button>
        )}>
        <Modal.Content>
          <ModalHeader title="sign up" />
          <Modal.Description>
            <Header />
            <Form id="signUp">
              <Form.Group widths="equal">
                <Form.Input fluid placeholder="Firstname" onChange={onChange} required />
                <Form.Input fluid placeholder="Lastname" onChange={onChange} required />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input fluid placeholder="Email Address" onChange={onChange} required />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input fluid placeholder="Password" onChange={onChange} required />
              </Form.Group>
              <Button onClick={onClick} type="submit" basic fluid huge="true" id="signup-button">Sign Up</Button>
            </Form>
            <ModalDivider title="Or sign up with" />
            <SocialIcons />
            <ModalFooter title="Already have an account?" link="Sign In" />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
}

SignUpModal.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func
};
SignUpModal.defaultProps = {
  onChange: PropTypes.func,
  onClick: PropTypes.func
};

export default SignUpModal;
