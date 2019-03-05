/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Container, Header, Comment, Divider, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import ShareArticle from '../ShareArticle';
import calendar from '../../images/calendar.svg';
import time from '../../images/time.svg';
import './styles/ReadArticle.scss';

import author from '../../images/avatar.png';
import { getArticle } from '../../actions/readArticleAction';
import { dateFormatter, readTimeFormatter } from '../../helpers/articleInfoFormatter';
import { bookmarkedAction, removeBookmarkAction } from '../../actions/bookmarkAction';
import { getUserIdFromLocalStorage } from '../../helpers/jwt';

class ReadArticle extends Component {
  componentDidMount = () => {
    const id = this.props.selectedArticle;
    const { theArticle } = this.props;
    theArticle(id);
  };

  getArticleContent = articleContent => (
    <Container textAlign="justified">
      <div className="articleContent">
        <p>{articleContent}</p>
        <p>{articleContent}</p>
      </div>
    </Container>
  );

  getArticleInfo = (articleAuthor, articleDate, articleReadTime) => (
    <Comment className="infoContainer">
      <Comment.Content>
        <Comment.Author className="articleAuthor">{articleAuthor}</Comment.Author>
        <Comment.Text className="articleDate">
          <Image src={calendar} />
          <span>{dateFormatter(articleDate)}</span>
        </Comment.Text>
        <Comment.Text className="articleReadTime">
          <Image src={time} />
          <span>{readTimeFormatter(articleReadTime)}</span>
        </Comment.Text>
      </Comment.Content>
    </Comment>
  );

  getAuthorDetails = (authorDetails) => {
    if (authorDetails) {
      const { firstname, lastname, profile } = authorDetails;
      return { authorName: `${firstname} ${lastname}`, profile };
    }
    return {};
  };

  handleIconClick = () => {
    const authorizedToken = getUserIdFromLocalStorage();
    const { createBookmark, removeBookmark } = this.props;
    const { bookmark } = this.props.retrievedArticle.successResponse;
    const detail = {
      userId: authorizedToken,
      articleId: this.props.selectedArticle
    };
    !bookmark ? createBookmark(detail) : removeBookmark(detail);
  }

  render() {
    const { title, content, createdAt, id, description, featuredImageUrl,
      readTime, articleAuthor, bookmark } = this.props.retrievedArticle.successResponse;
    const authorDetails = this.getAuthorDetails(articleAuthor);
    return (
      <Container className="readArticleContainer">
        <Image src={featuredImageUrl} size="massive" />
        <Header as="h1" className="articleTitle">{title}</Header>
        <Comment.Group className="articleInfo">
          <Image avatar as="a" src={author} />
          {this.getArticleInfo(authorDetails.authorName, createdAt, readTime)}
          <Icon name={bookmark ? 'bookmark' : 'bookmark outline'} size="large" className="bookmarkIcon" onClick={this.handleIconClick} />
        </Comment.Group>
        <Divider className="articleDivider" />
        {this.getArticleContent(content)}
        <div className="icon-bar">
          <ShareArticle title={title} id={id} description={description} />
        </div>
        <Divider className="articleDivider" />
      </Container>
    );
  }
}
ReadArticle.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  createdAt: PropTypes.string,
  readTime: PropTypes.number,
  featuredImageUrl: PropTypes.string,
  articleAuthor: PropTypes.object,
  theArticle: PropTypes.string.isRequired,
  retrievedArticle: PropTypes.object,
  selectedArticle: PropTypes.string.isRequired,
  bookmark: PropTypes.bool.isRequired,
  createBookmark: PropTypes.func,
  removeBookmark: PropTypes.func
};

ReadArticle.defaultProps = {
  id: '',
  description: '',
  title: '',
  content: '',
  createdAt: '',
  readTime: 0,
  featuredImageUrl: '',
  articleAuthor: {},
  retrievedArticle: {},
  createBookmark: null,
  removeBookmark: null
};

const mapDispatchToProps = dispatch => ({
  createBookmark: detail => dispatch(bookmarkedAction(detail)),
  removeBookmark: detail => dispatch(removeBookmarkAction(detail)),
  theArticle: id => dispatch(getArticle(id))
});

const mapStateToProps = state => ({
  retrievedArticle: state.readArticle,
});
export { ReadArticle as ReadArticlePage };
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReadArticle);
