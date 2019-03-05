import React from 'react';
import { shallow } from 'enzyme';
import ShareArticle from '.';

describe('Share Article Component', () => {
  it('should rendered share Article Icons without crashing', () => {
    const wrapper = shallow(<ShareArticle
    title="news" />);
    expect(wrapper).toMatchSnapshot();
  });
});
