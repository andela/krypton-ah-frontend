import React from 'react';
import { Icon } from 'semantic-ui-react';
import { socialMediaLoginIcons } from '../../constants';
import './socialIcon.scss';


function SocialIcons() {
  return (
    <div className="socialIconsHolder">
      {
        socialMediaLoginIcons.map(iconDetail => (
          <div key={iconDetail.key} className="groupIcon">
            <Icon className="socialIcon" size="big" name={iconDetail.iconName} />
            <span>{iconDetail.text}</span>
          </div>
        ))
      }
    </div>
  );
}

export default SocialIcons;
