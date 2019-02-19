import React from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import SocialMediaIcons from '../SocialMediaIcons';
import './Footer.scss';

export default function Footer() {
  return (
    <Grid className="footer" verticalAlign="middle">
      <Grid.Row centered>
        <Menu position="relative">
          <SocialMediaIcons iconSize="large" />
        </Menu>
      </Grid.Row>
      <Grid.Row className="footerText" centered>
        @copyright 2018 - Andela Simulations Project (Krypton)
      </Grid.Row>
    </Grid>
  );
}
