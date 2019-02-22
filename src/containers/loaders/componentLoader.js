import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

export default function componentloaderHOC() {
  return (
    <Segment>
      <Dimmer active inverted>
        <Loader size="medium" disabled />
      </Dimmer>
      <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
    </Segment>
  );
}
