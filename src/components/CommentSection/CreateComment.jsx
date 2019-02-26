/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';

import { createComment } from '../../helpers/axiosHelper/commentRequests';

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: this.props.articleId,
      mainCommentId: this.props.mainCommentId,
      commentMessage: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { articleId, mainCommentId, commentMessage } = this.state;

    createComment(articleId, commentMessage, mainCommentId);

    this.setState(state => ({
      ...state,
      commentMessage: ''
    }));
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState(state => ({
      ...state,
      [name]: value
    }));
  }

  render() {
    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit}>
          <h1>ADD COMMENT</h1>
          <Form.TextArea
            name="commentMessage"
            value={this.state.commentMessage}
            onChange={this.handleChange} />
          <Button content="Post" labelPosition="left" icon="edit" primary />
        </Form>
      </Fragment>
    );
  }
}

export default CreateComment;

CreateComment.propTypes = {
  articleId: PropTypes.string.isRequired,
  mainCommentId: PropTypes.string
};

CreateComment.defaultProps = {
  mainCommentId: null
};
