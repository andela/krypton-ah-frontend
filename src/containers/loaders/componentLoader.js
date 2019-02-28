import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

<<<<<<< HEAD
export default function componentloader() {
=======
export default function componentloaderHOC() {
>>>>>>> landing-page-logic
  return (
    <Segment>
      <Dimmer active inverted>
        <Loader size="medium" disabled />
      </Dimmer>
      <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
    </Segment>
  );
}
