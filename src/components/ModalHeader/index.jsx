import React from 'react';
import { Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
// import checkPropTypes from 'check-prop-types';
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
  title: PropTypes.string.isRequired
};

export default ModalHeader;
