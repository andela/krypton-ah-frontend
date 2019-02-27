import React from 'react';
import { shallow } from 'enzyme';
import CreateArticleTab from '.';

describe('ArticleTab Component', () => {
  it('should rendered ArticleTab component without crashing', () => {
    const wrapper = shallow(<CreateArticleTab />);
    expect(wrapper).toMatchSnapshot();
  });
});
