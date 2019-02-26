/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Comment, Header, Container, Divider, Image } from 'semantic-ui-react';
import moment from 'moment';

import * as actions from '../../actions/commentAction/commentActions';
import CommentThreads from './CommentThreads';
import CreateComment from './CreateComment';

import './styles/CommentSection.scss';
import dislike from '../../images/dislike.svg';
import like from '../../images/like.svg';

class FetchComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: this.props.articleId,
      mainCommentId: this.props.mainCommentId,
      count: '',
      fetchThreads: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    this.props.getComments(this.state.articleId, this.state.mainCommentId);
    this.props.getCommentLikes();
  }

  getCommentActions = (comment, commentLikes) => (
    <Comment.Actions>
      <Comment.Action>
        <Image src={like} />
        {commentLikes.like}
      </Comment.Action>
      <Comment.Action>
        <Image src={dislike} />
        {commentLikes.dislike}
      </Comment.Action>
      <Comment.Metadata>
        <span>{moment.utc(comment.createdAt, 'YYYY-MM-DDTHH:mm:ss').fromNow()}</span>
      </Comment.Metadata>
      <Comment.Action className="replyButton">Reply</Comment.Action>
      <Comment.Action className="showThreads" onClick={this.handleOnClick} id={comment.id}>
        {comment.threads}
        {' '}
        Threads
      </Comment.Action>
    </Comment.Actions>
  );

  // getComment = (comment, commentLike) => (
  //   <Comment>
  //     <Comment.Avatar as="a" src={comment.avatar} />
  //     <Comment.Content>
  //       <Comment.Text>{comment.comment}</Comment.Text>
  //       {this.getCommentActions(
  //         commentLike.like,
  //         commentLike.dislike,
  //         comment.threads,
  //         moment.utc(comment.createdAt, 'YYYY-MM-DDTHH:mm:ss').fromNow()
  //       )}
  //       {comment.threads ? (
  //         <CommentThreads
  //           articleId={this.state.articleId} mainCommentId={comment.id}
  //           count={comment.threads}
  //         />
  //       ) : null}
  //       <CreateComment articleId={this.state.articleId} mainCommentId={comment.id} />
  //     </Comment.Content>
  //   </Comment>
  // );

  handleOnClick(e) {
    const mainCommentId = e.target.id;
    let { fetchThreads } = this.state;
    this.props.comment.threadsArray = [];
    console.log(mainCommentId, this.state.mainCommentId);
    if (mainCommentId === this.state.mainCommentId) {
      fetchThreads = !fetchThreads;
    } else {
      fetchThreads = true;
    }
    this.setState(state => ({
      ...state,
      fetchThreads,
      mainCommentId
    }));
  }

  render() {
    const { commentsArray } = this.props.comment;
    const { commentLike } = this.props.comment;
    return (
      <Container>
        <div className="commentsContainer">
          <Comment.Group>
            <Header as="h3" className="commentsHeader">
              Comments
            </Header>
            {commentsArray.map(comment => (
              <Fragment key={comment.id}>
                {/* {this.getComment(comment, commentLike)} */}
                <Comment>
                  <Comment.Avatar as="a" src={comment.avatar} />
                  <Comment.Content>
                    <Comment.Text>{comment.comment}</Comment.Text>
                    {this.getCommentActions(
                      comment,
                      commentLike,
                    )}
                    {this.state.fetchThreads === true && this.state.mainCommentId === comment.id ? (
                      <CommentThreads
                        articleId={this.state.articleId} mainCommentId={comment.id}
                        count={comment.threads}
                      />
                    ) : null}
                    <CreateComment articleId={this.state.articleId} mainCommentId={comment.id} />
                  </Comment.Content>
                </Comment>
                <Divider className="commentDivider" />
              </Fragment>
            ))}
          </Comment.Group>
          <p className="moreComments">More Comments</p>
        </div>
      </Container>
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
)(FetchComment);

FetchComment.propTypes = {
  articleId: PropTypes.string.isRequired,
  mainCommentId: PropTypes.string,
  comment: PropTypes.object.isRequired,
  commentsArray: PropTypes.array,
  getComments: PropTypes.func.isRequired,
  getCommentLikes: PropTypes.func.isRequired
};

FetchComment.defaultProps = {
  commentsArray: [],
  mainCommentId: null
};
