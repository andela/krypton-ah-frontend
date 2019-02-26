/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Comment, Header, Container, Divider } from 'semantic-ui-react';

import * as actions from '../../actions/commentAction/commentActions';

class FetchComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: this.props.articleId,
      mainCommentId: this.props.mainCommentId
    };
  }

  componentDidMount() {
    console.log(this.state);
    this.props.getComments(this.state.articleId, this.state.mainCommentId);
  }

  render() {
    console.log(this.props.comment.commentsArray)
    const { commentsArray } = this.props.comment;
    return (
      <Container>
        <div className="commentsContainer">
          <Comment.Group>
            <Header as="h3" className="commentsHeader">
              Comments
            </Header>
            {commentsArray.map(comment => (
              <Fragment key={comment.id}>
                {comment.comment}
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
  mainCommentId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  commentsArray: PropTypes.array.isRequired,
  getComments: PropTypes.func.isRequired
};
