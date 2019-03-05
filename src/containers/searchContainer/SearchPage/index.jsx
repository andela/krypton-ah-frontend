import React, { Component } from 'react';
import './SearchPage.scss';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: '',
      search: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(state => ({
      ...state,
      [name]: value
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      search: true
    });
  }

  render() {
    return (
      <div className="searchPage">
      </div>
    );
  }
}

export default SearchPage;
