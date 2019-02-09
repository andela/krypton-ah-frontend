import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import './modalFooter.scss';


function ModalFooter(props) {
  const { title, link } = props;
  return (
    <>
      <div className="createAccount">
        <Header as="h5">
          { title }
          {' '}
          <span color="red">{ link }</span>
        </Header>
      </div>
    </>
  );
}

ModalFooter.propTypes = {
  title: PropTypes.string.isRequired
};

export default ModalFooter;
