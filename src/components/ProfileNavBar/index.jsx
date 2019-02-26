import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Button, Icon, Accordion } from 'semantic-ui-react';
import ProfileMenu from '../ProfileMenu';
import { authUserMenuItem, ownerMenuItem, unAuthUserMenuItem } from '../../constants/userProfile';
import './ProfileNavBar.scss';

export default class ProfileNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.renderMenuItems = this.renderMenuItems.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.getMenuItems = this.getMenuItems.bind(this);
  }

  getMenuItems() {
    const { user } = this.props;
    let menuItems;
    switch (user) {
      case 'owner':
        menuItems = ownerMenuItem;
        break;
      case 'authenticated':
        menuItems = authUserMenuItem;
        break;
      default:
        menuItems = unAuthUserMenuItem;
    }
    return menuItems;
  }

  toggleMenu() {
    const { active } = this.state;
    this.setState({ active: !active });
  }

  renderMenuItems(menuItems, screen) {
    return menuItems.map((menu) => {
      const menuItem = menu.icon === 'button' ? (
        <Button secondary>Follow</Button>
      ) : (
        <Image className="profileMenuIcon" src={menu.icon} />
      );
      return (
        <Grid.Column className={screen} key={menu.text}>
          <ProfileMenu to={menu.to} menuItem={menuItem} text={menu.text} count={menu.count} />
        </Grid.Column>
      );
    });
  }

  render() {
    const menuItems = this.getMenuItems();
    const { active } = this.state;
    return (
      <Grid.Row
        className="profileNavBar"
        centered
        verticalAlign="middle"
        columns={menuItems.length}
      >
        <Accordion className="profileNavBarBars">
          <Accordion.Title active={active} onClick={this.toggleMenu}>
            <Icon size="big" name="bars" />
          </Accordion.Title>
          <Accordion.Content className="accordionContent" active={active}>
            {this.renderMenuItems(menuItems, 'mobile')}
          </Accordion.Content>
        </Accordion>
        {this.renderMenuItems(menuItems, 'desktop')}
      </Grid.Row>
    );
  }
}

ProfileNavBar.defaultProps = {
  user: 'unauthenticated'
};

ProfileNavBar.propTypes = {
  user: PropTypes.oneOf(['owner', 'authenticated', 'unauthenticated'])
};
