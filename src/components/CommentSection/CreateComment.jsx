/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';

import * as actions from '../../actions/commentAction/commentActions';

import './styles/CommentSection.scss';

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: this.props.articleId,
      mainCommentId: this.props.mainCommentId,
      commentMessage: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { articleId, mainCommentId, commentMessage } = this.state;
    this.props.addComment(articleId, commentMessage, mainCommentId);

    this.setState(state => ({
      ...state,
      commentMessage: '',
    }));

    if (mainCommentId !== null) {
      const { index } = this.props;
      return this.props.setMainCommentId(mainCommentId, index);
    }

    this.props.setMainCommentId(mainCommentId);
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
      <Form className="CreateComment" onSubmit={this.handleSubmit}>
        <Form.TextArea
          className="try"
          name="commentMessage"
          value={this.state.commentMessage}
          onChange={this.handleChange} />
        <Button className="addCommentButton" content="Post" />
        <div className="clearFloat" />
      </Form>
    );
  }
}

export const mapStateToProps = state => ({
  comment: state.commentReducer
});

export const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateComment);

CreateComment.propTypes = {
  articleId: PropTypes.string.isRequired,
  mainCommentId: PropTypes.string,
  addComment: PropTypes.func.isRequired,
  setMainCommentId: PropTypes.func.isRequired,
  index: PropTypes.number
};

CreateComment.defaultProps = {
  mainCommentId: null,
  index: 0
};
