/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Comment, Container, Divider, Image } from 'semantic-ui-react';
import moment from 'moment';


import * as actions from '../../actions/commentAction/commentActions';

import './styles/CommentSection.scss';
import dislike from '../../images/dislike.svg';
import like from '../../images/like.svg';

class CommentThreads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: this.props.articleId,
      mainCommentId: this.props.mainCommentId,
      count: this.props.count
    };
  }

  componentDidMount() {
    this.props.getComments(this.state.articleId, this.state.mainCommentId);
    this.props.getCommentLikes();
  }

  getCommentActions = (numberOfLikes, numberOfDisikes, commentTime) => (
    <Comment.Actions>
      <Comment.Action>
        <Image src={like} />
        {numberOfLikes}
      </Comment.Action>
      <Comment.Action>
        <Image src={dislike} />
        {numberOfDisikes}
      </Comment.Action>
      <Comment.Metadata>
        <span>{commentTime}</span>
      </Comment.Metadata>
    </Comment.Actions>
  );

  getComment = (comment, commentLike) => (
    <Comment>
      <Comment.Avatar as="a" src={comment.avatar} />
      <Comment.Content>
        <Comment.Text>{comment.comment}</Comment.Text>
        {this.getCommentActions(
          commentLike.like,
          commentLike.dislike,
          moment.utc(comment.createdAt, 'YYYY-MM-DDTHH:mm:ss').fromNow()
        )}
      </Comment.Content>
    </Comment>
  );

  render() {
    const { threadsArray } = this.props.comment;
    const { commentLike } = this.props.comment;
    if (this.state.count > 0) {
      return (
        <Container>
          <div className="commentsContainer">
            <Comment.Group>
              {threadsArray.map(comment => (
                <Fragment key={comment.id}>
                  {this.getComment(comment, commentLike)}
                  <Divider className="commentDivider" />
                </Fragment>
              ))}
            </Comment.Group>
          </div>
        </Container>
      );
    }
    return null;
  }
}

export const mapStateToProps = state => ({
  comment: state.commentReducer
});

export const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentThreads);

CommentThreads.propTypes = {
  articleId: PropTypes.string.isRequired,
  mainCommentId: PropTypes.string,
  comment: PropTypes.object.isRequired,
  threadsArray: PropTypes.array,
  getComments: PropTypes.func.isRequired,
  getCommentLikes: PropTypes.func.isRequired
};

CommentThreads.defaultProps = {
  threadsArray: [],
  mainCommentId: null
};
