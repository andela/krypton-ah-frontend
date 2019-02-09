import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'semantic-ui-react';
import socialMediaElements from '../../constants';
import './SocialMediaIcons.scss';

export default function SocialMediaIcons({ position, iconSize }) {
  const padding = iconSize === 'small' ? 'smallIconPadding' : 'bigIconPadding';
  return (
    <Menu.Menu position={position} className="SocialMediaContainer">
      {socialMediaElements.map(socialMediaElement => (
        <Menu.Item className={`socialMediaIcons ${padding}`} key={socialMediaElement.key}>
          <Icon className="socialMediaIcon" fitted size={iconSize} name={socialMediaElement.name} />
        </Menu.Item>
      ))}
    </Menu.Menu>
  );
}

SocialMediaIcons.defaultProps = {
  position: null,
  iconSize: 'small'
};

SocialMediaIcons.propTypes = {
  position: PropTypes.string,
  iconSize: PropTypes.oneOf(['small', 'large'])
};
