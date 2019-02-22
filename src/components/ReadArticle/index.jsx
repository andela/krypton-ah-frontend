import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Container, Header, Comment, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import ShareArticle from '../ShareArticle';
import calendar from '../../images/calendar.svg';
import time from '../../images/time.svg';
import './styles/ReadArticle.scss';

import author from '../../images/avatar.png';
import { getArticle } from '../../actions/readArticleAction';
import { dateFormatter, readTimeFormatter } from '../../helpers/articleInfoFormatter';

class ReadArticle extends Component {
  componentDidMount = () => {
    this.props.getArticle(this.props.selectedArticle);
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

  render() {
    const {
      title,
      content,
      createdAt,
      slug,
      description,
      featuredImageUrl,
      readTime,
      articleAuthor
    } = this.props.retrievedArticle.successResponse;
    const authorDetails = this.getAuthorDetails(articleAuthor);
    return (
      <Container className="readArticleContainer">
        <Image src={featuredImageUrl} size="massive" />
        <Header as="h1" className="articleTitle">
          {title}
        </Header>
        <Comment.Group className="articleInfo">
          <Image avatar as="a" src={author} />
          {this.getArticleInfo(authorDetails.authorName, createdAt, readTime)}
        </Comment.Group>
        <Divider className="articleDivider" />
        <div className="icon-bar">
          <ShareArticle title={title} slug={slug} description={description} />
        </div>
        {this.getArticleContent(content)}
        <Divider className="articleDivider" />
      </Container>
    );
  }
}
ReadArticle.propTypes = {
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  createdAt: PropTypes.string,
  readTime: PropTypes.number,
  featuredImageUrl: PropTypes.string,
  articleAuthor: PropTypes.object,
  getArticle: PropTypes.func.isRequired,
  retrievedArticle: PropTypes.object,
  selectedArticle: PropTypes.string.isRequired
};

ReadArticle.defaultProps = {
  title: '',
  content: '',
  createdAt: '',
  readTime: 0,
  featuredImageUrl: '',
  articleAuthor: {},
  retrievedArticle: {}
};

const mapStateToProps = state => ({
  retrievedArticle: state.readArticle
});
export { ReadArticle as ReadArticlePage };
export default connect(
  mapStateToProps,
  { getArticle }
)(ReadArticle);
