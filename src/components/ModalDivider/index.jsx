import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'semantic-ui-react';
import './modalDivider.scss';


function ModalDivider(props) {
  const { title } = props;
  return (
    <>
      <Divider horizontal>{ title }</Divider>
    </>
  );
}

ModalDivider.propTypes = {
  title: PropTypes.string.isRequired
};

export default ModalDivider;
