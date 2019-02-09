import React from 'react';
import { Image } from 'semantic-ui-react';
import facebook from './images/Facebook.svg';
import google from './images/Google+.svg';
import linkedin from './images/Linkedin.svg';
import twitter from './images/Twitter.svg';
import './socialIcon.scss';

function SocialIcons() {
  return (
    <div>
      <div className="center aligned column">
        <Image.Group size="tiny">
          <Image src={facebook} />
          <Image src={google} />
          <Image src={twitter} />
          <Image src={linkedin} />
        </Image.Group>
      </div>
    </div>
  );
}

export default SocialIcons;
