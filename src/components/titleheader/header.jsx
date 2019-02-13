import React from 'react';
import { Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './header.scss';

export default function header(props) {
  const { text } = props;
  return (
    <div>
      <Header as="h3" block>
        <p className="titletext">{text}</p>
      </Header>
    </div>
  );
}

header.defaultProps = {
  text: 'placeholder titleheader'
};

header.propTypes = {
  text: PropTypes.string
};
