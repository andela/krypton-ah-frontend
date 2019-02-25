import React from 'react';
import TinyBlackBar from './TinyBlackBar';
import { WhiteBar } from './WhiteNavBar';
import './NavBar.scss';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fixed: false };
    this.stickTopMenu = this.stickTopMenu.bind(this);
    this.unStickTopMenu = this.unStickTopMenu.bind(this);
  }

  stickTopMenu() {
    this.setState({ fixed: true });
  }

  unStickTopMenu() {
    this.setState({ fixed: false });
  }

  render() {
    const { fixed } = this.state;
    return (
      <React.Fragment>
        <TinyBlackBar stickTopMenu={this.stickTopMenu} unStickTopMenu={this.unStickTopMenu} />
        <WhiteBar fixed={fixed} />
      </React.Fragment>
    );
  }
}
