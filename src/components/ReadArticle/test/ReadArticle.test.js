import React from 'react';
import { shallow } from 'enzyme';
import ReadArticle from '../index';
import { author,
  featuredImage,
  ARTICLE_TITLE,
  ARTICLE_AUTHOR,
  ARTICLE_DATE,
  ARTICLE_READ_TIME,
  ARTICLE_CONTENT } from '../../../constants';

describe('ReadArticle', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <ReadArticle
        articleTitle={ARTICLE_TITLE}
        articleAuthor={ARTICLE_AUTHOR}
        articleDate={ARTICLE_DATE}
        articleReadTime={ARTICLE_READ_TIME}
        articleContent={ARTICLE_CONTENT}
        featuredImage={featuredImage}
        author={author}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
