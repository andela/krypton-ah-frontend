import React from 'react';
import ModalComponent from '../../components/FormContainer';
import SignUpForm from '../../components/SignUpForm';

function SignUp() {
  return (
    <ModalComponent
      title="sign up"
      baseText="Already have an account?"
      link="Sign In"
      formLink="login">
      <SignUpForm />
    </ModalComponent>
  );
}

export default SignUp;
