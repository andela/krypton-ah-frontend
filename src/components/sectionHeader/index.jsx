import React from 'react';
import { Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './Titleheader.scss';

export default function sectionHeader(props) {
  const { text } = props;
  return (
    <div>
      <Header as="h3" block>
        <p className="titletext">{text}</p>
      </Header>
    </div>
  );
}

sectionHeader.defaultProps = {
  text: 'placeholder titleheader'
};

sectionHeader.propTypes = {
  text: PropTypes.string
};
