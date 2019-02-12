import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'semantic-ui-react';
import './modalDivider.scss';

function ModalDivider(props) {
  const { text } = props;
  return <Divider horizontal>{text}</Divider>;
}

ModalDivider.propTypes = {
  text: PropTypes.string
};

ModalDivider.defaultProps = {
  text: 'sign in'
};

export default ModalDivider;
