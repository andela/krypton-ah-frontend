import React, { Component } from "react";
import { Menu, Visibility } from "semantic-ui-react";
import MainNavContainer from "./MainNavContainer";
import SocialContainer from "../../components/socialIcons";
import "./navbar.scss";

class navbarcontainer extends Component {
  state = {
    fixed: null
  };
  render() {
    return (
      <div className="navbar">
        <MainNavContainer fixed={this.state.fixed} />
      </div>
    );
  }
}

export default navbarcontainer;
