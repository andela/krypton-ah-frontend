import React from 'react';
import SignInForm from '.';
import { componentSnapshots } from '../../utils/helpers';

function checkSignInForm() {
  test('it should matches the snapshot', () => {
    componentSnapshots(<SignInForm />);
  });
}

describe('Modal Footer', () => {
  checkSignInForm();
});
