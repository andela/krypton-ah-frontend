import React from 'react';
import { Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './Titleheader.scss';
import { mockHeader } from '../../constants';

export default function sectionHeader(props) {
  const { text } = props;
  return (
    <Header as="h3" block>
      <p className="titletext">{text}</p>
    </Header>
  );
}

sectionHeader.defaultProps = {
  text: mockHeader
};

sectionHeader.propTypes = {
  text: PropTypes.string
};
