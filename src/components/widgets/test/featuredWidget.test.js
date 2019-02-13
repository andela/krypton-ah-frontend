import React from 'react';
import { shallow } from 'enzyme';
import Widget from '../Articlewidgets/ArticlesFeedContainer';

describe('button test', () => {
  it('should test for the button component', () => {
    const descriptionProps = 'this is a test description';
    const classNameProps = 'className';
    const wrapper = shallow(<Widget description={descriptionProps} className={classNameProps} />);
    expect(wrapper.find('Feed')).toBeDefined();
    expect(wrapper.find('featuredwidget')).toBeDefined();
  });
});
