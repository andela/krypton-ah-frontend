import React from 'react';
import { mount } from 'enzyme';
import { ReadArticlePage } from '../index';
import { props, retrievedArticle } from '../../../mockData/readArticle';
import { getArticle } from '../../../actions/readArticleAction';

describe('Read article component', () => {
  it('should matches the snapshot', () => {
    const wrapper = mount(
      <ReadArticlePage
        selectedArticle={props.match.params.title}
        retrievedArticle={retrievedArticle}
        getArticle={getArticle}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
