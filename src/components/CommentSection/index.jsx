import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Comment, Header, Container, Divider, Image } from 'semantic-ui-react';
import './styles/CommentSection.scss';
import dislike from '../../images/dislike.svg';
import like from '../../images/like.svg';

export default class CommentSection extends Component {
  getComment = comment => (
    <Comment>
      <Comment.Avatar as="a" src={comment.avatar} />
      <Comment.Content>
        <Comment.Text>{comment.commentText}</Comment.Text>
        {this.getCommentActions(
          comment.numberOfLikes,
          comment.numberOfDisikes,
          comment.commentTime,
          comment.numberOfThreads
        )}
      </Comment.Content>
    </Comment>
  );

  getCommentActions = (numberOfDisikes, numberOfLikes, numberOfThreads, commentTime) => (
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
      <Comment.Action className="replyButton">Reply</Comment.Action>
      <Comment.Action className="showThreads">{numberOfThreads}</Comment.Action>
    </Comment.Actions>
  );

  render() {
    const { commentsArray } = this.props;
    return (
      <Container>
        <div className="commentsContainer">
          <Comment.Group>
            <Header as="h3" className="commentsHeader">
              Comments
            </Header>
            {commentsArray.map(comment => (
              <Fragment key={comment.id}>
                {this.getComment(comment)}
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

CommentSection.propTypes = { commentsArray: PropTypes.array };
CommentSection.defaultProps = { commentsArray: [] };
