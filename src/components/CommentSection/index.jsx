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
import Loading from '../Loader/Loading';

import './styles/CommentSection.scss';
import dislike from '../../images/dislike.svg';
import like from '../../images/like.svg';

class FetchComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: this.props.articleId,
      mainCommentId: this.props.mainCommentId,
      fetchThreads: false,
      index: 0
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.commentOnClick = this.commentOnClick.bind(this);
    this.createComment = this.createComment.bind(this);
  }

  componentDidMount() {
    this.props.getComments(this.state.articleId, this.state.mainCommentId);
    this.props.getCommentLikes();
  }

  componentDidUpdate(prevProps) {
    const oldUpdateState = prevProps.comment.updateComment;

    const { updateComment, mainCommentId } = this.props.comment;
    if (oldUpdateState !== updateComment && updateComment === true) {
      if (mainCommentId) {
        this.props.comment.commentsArray[this.state.index].threads += 1;
      }
      return this.props.getComments(this.state.articleId, mainCommentId);
    }
  }

  getComments = (commentsArray, commentLike) => (
    commentsArray.map(comment => (
      <Fragment key={comment.id}>
        <Comment>
          <Comment.Avatar as="a" src={comment.avatar} />
          <Comment.Content>
            <Comment.Text>{comment.comment}</Comment.Text>
            {this.getCommentActions(comment, commentLike)}
            {this.state.fetchThreads && this.state.mainCommentId === comment.id ? (
              <Fragment>
                <CommentThreads
                  articleId={this.state.articleId}
                  mainCommentId={comment.id}
                  threadCount={comment.threads} />
                <CreateComment
                  articleId={this.state.articleId} mainCommentId={this.state.mainCommentId}
                  setMainCommentId={this.commentOnClick} index={commentsArray.indexOf(comment)} />
              </Fragment>
            ) : null}
          </Comment.Content>
        </Comment>
        <Divider className="commentDivider" />
      </Fragment>
    ))
  )

  getCommentActions = (comment, commentLike) => (
    <Comment.Actions>
      <Comment.Action>
        <Image src={like} />
        <span className="commentInfo">
          {commentLike.like}
        </span>
      </Comment.Action>
      <Comment.Action>
        <Image src={dislike} />
        <span className="commentInfo">
          {commentLike.dislike}
        </span>
      </Comment.Action>
      <Comment.Metadata>
        <span className="commentInfo">{moment.utc(comment.createdAt, 'YYYY-MM-DDTHH:mm:ss').fromNow()}</span>
      </Comment.Metadata>
      <Comment.Action className="replyButton">
        {comment.threads}
        {comment.threads > 1 ? ' Threads' : ' thread' }
      </Comment.Action>
      <Comment.Action className="replyButton" onClick={this.handleOnClick} id={comment.id}>Reply</Comment.Action>
    </Comment.Actions>
  );

 createComment = () => (
   !this.state.fetchThreads ? (
     <div className="addComment">
       <h1 className="addCommentText">ADD COMMENT</h1>
       <CreateComment
        articleId={this.props.articleId}
        mainCommentId={null} setMainCommentId={this.commentOnClick} />
     </div>
   ) : null
 )

 handleOnClick(e) {
   const mainCommentId = e.target.id;
   let { fetchThreads } = this.state;
   this.props.comment.threadsArray = [];
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

 commentOnClick(mainCommentId, index) {
   this.setState(state => ({
     ...state,
     mainCommentId,
     index
   }));
 }

 render() {
   const { commentsArray, commentLike, success, commentIsLoading } = this.props.comment;
   const { length } = commentsArray;
   return (
     <Container className="commentContainer">
       <div className="commentList">
         <Comment.Group>
           <Header as="h3" className="commentsHeader"> Comments </Header>
           {length === 0 && commentIsLoading ? <Loading size="massive" /> : null}
           {length > 0 && commentIsLoading && this.state.mainCommentId === null ? <Loading size="small" /> : null}
           { this.getComments(commentsArray, commentLike) }
           {success && length === 0 && !commentIsLoading ? (
             <h1> No comment yet, be the first! </h1>) : null}
         </Comment.Group>
         {length > 5 ? <p className="moreComments">More Comments</p> : null}
       </div>
       {this.createComment()}
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
