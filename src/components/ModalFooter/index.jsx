import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import './modalFooter.scss';


function ModalFooter(props) {
  const { title, link } = props;
  return (
    <div className="create-account">
      <Header as="h5">
        { title }
        {' '}
        <span>{ link }</span>
      </Header>
    </div>
  );
}

ModalFooter.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string
};
ModalFooter.defaultProps = {
  title: 'Create an account',
  link: 'Sign In'
};

export default ModalFooter;
