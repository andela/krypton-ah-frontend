/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Comment, Container, Divider, Image } from 'semantic-ui-react';
import moment from 'moment';


import * as actions from '../../actions/commentAction/commentActions';

import Loading from '../Loader/Loading';

import './styles/CommentSection.scss';
import dislike from '../../images/dislike.svg';
import like from '../../images/like.svg';

class CommentThreads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: this.props.articleId,
      mainCommentId: this.props.mainCommentId
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

  getComments = (comment, commentLike) => (
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
    const { threadCount, comment: { threadsArray, commentLike, commentIsLoading } } = this.props;
    return (
      <Container>
        {commentIsLoading === true && threadCount > 0 ? <Loading size="small" /> : null}
        <div className="commentsContainer">
          <Comment.Group>
            {threadsArray.map(comment => (
              <Fragment key={comment.id}>
                {this.getComments(comment, commentLike)}
                <Divider className="commentDivider" />
              </Fragment>
            ))}
          </Comment.Group>
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
)(CommentThreads);

CommentThreads.propTypes = {
  articleId: PropTypes.string.isRequired,
  mainCommentId: PropTypes.string,
  comment: PropTypes.object.isRequired,
  threadCount: PropTypes.number.isRequired,
  getComments: PropTypes.func.isRequired,
  getCommentLikes: PropTypes.func.isRequired
};

CommentThreads.defaultProps = {
  mainCommentId: null
};
