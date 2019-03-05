import React, { Component, Fragment } from 'react';
import { Modal, Icon, Input, Segment, Radio } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import './SearchModal.scss';

class SearchModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: '',
      open: false,
      search: false,
      searchOption: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  show = size => () => this.setState({ size, open: true });

  close = () => this.setState({ open: false });

  handleRadioChange(event, { value }) {
    this.setState({ searchOption: value });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(state => ({
      ...state,
      [name]: value
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      search: true
    });
  }

  render() {
    const { open, size, article, searchOption } = this.state;
    if (searchOption) {
      if (this.state.search) { return <Redirect to={`/search/${searchOption}?value=${article}`} />; }
    } else if (this.state.search) { return <Redirect to={`/search/${searchOption}?value=${article}`} />; }
    return (
      <Fragment>
        <Icon size="big" name="search" onClick={this.show('fullscreen')} />
        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header className="headerBorder">
            <Icon name="close" onClick={this.close} />
          </Modal.Header>
          <Modal.Content>
            <form onSubmit={this.handleSubmit}>
              <Input type="text" name="article" value={article} placeholder="Type and hit Enter to search..." className="search" onChange={this.handleChange} />
              <Segment>
                <Radio label="Author" name="searchOption" value="author" className="radioMargin" checked={this.state.searchOption === 'author'} onChange={this.handleRadioChange} />
                <Radio label="Tag" name="searchOption" value="tag" className="radioMargin" checked={this.state.searchOption === 'tag'} onChange={this.handleRadioChange} />
                <Radio label="Title" name="searchOption" value="title" className="radioMargin" checked={this.state.searchOption === 'title'} onChange={this.handleRadioChange} />
              </Segment>
            </form>
          </Modal.Content>
        </Modal>
      </Fragment>
    );
  }
}

export default SearchModal;
