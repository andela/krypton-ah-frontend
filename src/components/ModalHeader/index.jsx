import React from 'react';
import { Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './modalHeader.scss';

function ModalHeader(props) {
  const { title } = props;
  return (
    <div>
      <Modal.Header as="h2">{ title }</Modal.Header>
      <hr />
    </div>
  );
}

ModalHeader.propTypes = {
  title: PropTypes.string
};
ModalHeader.defaultProps = {
  title: 'Sign Up'
};

export default ModalHeader;
