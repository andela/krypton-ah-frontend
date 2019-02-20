import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Container, Header, Comment, Divider } from 'semantic-ui-react';
import ShareArticle from '../ShareArticle';
import calendar from '../../images/calendar.svg';
import time from '../../images/time.svg';
import './styles/ReadArticle.scss';

export default class ReadArticle extends Component {
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
          <span>{articleDate}</span>
        </Comment.Text>
        <Comment.Text className="articleReadTime">
          <Image src={time} />
          <span>{articleReadTime}</span>
        </Comment.Text>
      </Comment.Content>
    </Comment>
  );

  render() {
    const { articleTitle, articleAuthor, articleDate, articleReadTime, articleContent,
      featuredImage, author, slug, description
    } = this.props;
    return (
      <Container className="readArticleContainer">
        <Image src={featuredImage} size="massive" />
        <Header as="h1" className="articleTitle">
          {articleTitle}
        </Header>
        <Comment.Group className="articleInfo">
          <Image avatar as="a" src={author} />
          {this.getArticleInfo(articleAuthor, articleDate, articleReadTime)}
        </Comment.Group>
        <Divider className="articleDivider" />
        <div className="icon-bar">
          <ShareArticle title={articleTitle} slug={slug} description={description} />
        </div>
        {this.getArticleContent(articleContent)}
        <Divider className="articleDivider" />
      </Container>
    );
  }
}
ReadArticle.propTypes = {
  articleTitle: PropTypes.string.isRequired,
  articleAuthor: PropTypes.string.isRequired,
  articleDate: PropTypes.string.isRequired,
  articleReadTime: PropTypes.string.isRequired,
  articleContent: PropTypes.string.isRequired,
  featuredImage: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
