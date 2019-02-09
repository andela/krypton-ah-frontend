import React from 'react';
import ModalComponent from '../../components/FormContainer';
import SignIn from '../../components/SignInForm';

function Home() {
  return (
    <div>
      <h1>Welcome to Authors Havens</h1>
      <ModalComponent
      title="sign in"
      divider="sign in"
      baseText="Create an account."
      link="Sign up">
        <SignIn />
      </ModalComponent>
    </div>
  );
}

export default Home;
