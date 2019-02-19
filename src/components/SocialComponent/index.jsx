import React from 'react';
import { Icon } from 'semantic-ui-react';
import { socialMediaLoginIcons } from '../../constants';
import './socialIcon.scss';

function SocialIcons() {
  return (
    <div className="socialIconsHolder">
      {
        socialMediaLoginIcons.map(iconDetail => (
          <a href={iconDetail.url} key={iconDetail.key}>
            <div className="groupIcon">
              <Icon className="socialIcon" size="big" name={iconDetail.iconName} />
              <span>{iconDetail.text}</span>
            </div>
          </a>
        ))
      }
    </div>
  );
}

export default SocialIcons;
