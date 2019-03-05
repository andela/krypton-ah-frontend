import React from 'react';
import ModalComponent from '../../components/FormContainer';
import SignInForm from '../../components/SignInForm';

function SignIn() {
  return (

    <ModalComponent
      title="sign in"
      baseText="Create an account."
      link="Sign up"
      formLink="signup">
      <SignInForm />
    </ModalComponent>
  );
}

export default SignIn;
