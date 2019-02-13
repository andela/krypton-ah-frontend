import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

export default function button(props) {
  const { value } = props;
  return <Button>{value}</Button>;
}

button.defaultProps = {
  value: 'Placeholder button text'
};

button.propTypes = {
  value: PropTypes.string
};
