import Validator from 'validator';

export function validate(user) {
  const errors = {};
  if (Validator.isEmpty(user.firstname)) {
    errors.firstname = 'Firstname field is required';
  }
  if (Validator.isEmpty(user.lastname)) {
    errors.lastname = 'Lastname field is required';
  }
  if (Validator.isEmpty(user.email)) {
    errors.email = 'Email field is required';
  } else if (!Validator.isEmail(user.email)) {
    errors.email = 'Invalid Email Address';
  }
  if (Validator.isEmpty(user.password)) {
    errors.password = 'Password field is required';
  } else if (!new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$', 'g').test(user.password)) {
    errors.password = 'Password must be at least 8 characters, 1 uppercase letter, 1 number';
  }
  return errors;
}

export function signInValidator(user) {
  const errors = {};

  if (Validator.isEmpty(user.email)) {
    errors.email = 'Email field is required';
  } else if (!Validator.isEmail(user.email)) {
    errors.email = 'Invalid Email Address';
  }
  if (Validator.isEmpty(user.password)) {
    errors.password = 'Password field is required';
  } else if (!new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$', 'g').test(user.password)) {
    errors.password = 'Password must be at least 8 characters, 1 uppercase letter, 1 number';
  }
  return errors;
}
