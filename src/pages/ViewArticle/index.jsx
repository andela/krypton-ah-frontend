import React, { Fragment } from 'react';
import ReadArticle from '../../components/ReadArticle';
import CommentSection from '../../components/CommentSection';
import {
  author,
  featuredImage,
  ARTICLE_TITLE,
  ARTICLE_AUTHOR,
  ARTICLE_DATE,
  ARTICLE_READ_TIME,
  ARTICLE_CONTENT,
  commentsArray
} from '../../../__mocks__';

export default function ViewArticle() {
  return (
    <Fragment>
      <ReadArticle
        articleTitle={ARTICLE_TITLE}
        articleAuthor={ARTICLE_AUTHOR}
        articleDate={ARTICLE_DATE}
        articleReadTime={ARTICLE_READ_TIME}
        articleContent={ARTICLE_CONTENT}
        featuredImage={featuredImage}
        author={author}
      />
      <CommentSection commentsArray={commentsArray} />
    </Fragment>
  );
}
