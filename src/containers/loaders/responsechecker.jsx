import React from 'react';
import { Message } from 'semantic-ui-react';

const loader = (article, field) => {
  if (article) {
    return (
      <Message negative>
        <p>An error occured while fetching..try reloading</p>
      </Message>
    );
  }
  return field;
};

export default loader;
