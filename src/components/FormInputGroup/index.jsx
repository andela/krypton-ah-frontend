import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

function FormInput({
  type, placeholder, name, value, handleChange
}) {
  return (
    <Form.Input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      fluid
      required
      onChange={handleChange}
    />
  );
}

FormInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: null
};

FormInput.defaultProps = {
  type: 'text',
  placeholder: 'Email Address',
  name: 'text',
  value: 'email',
  handleChange: null
};

export default FormInput;
