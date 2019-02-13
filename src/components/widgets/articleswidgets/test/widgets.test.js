import React from 'react';
import { shallow } from 'enzyme';
import ArticlesFeeds from '../Articlefeeds';
import ArticlesWidgets from '../reactionWidgets';

describe('button test', () => {
  it('should test for the button component', () => {
    const descriptionProps = 'this is a test description';
    const contentProps = 'placeholder title';
    const wrapper = shallow(
      <ArticlesFeeds description={descriptionProps} content={contentProps} />
    );
    expect(wrapper.find('FeedEvent')).toBeDefined();
    expect(wrapper.find('FeedContent')).toBeDefined();
    expect(wrapper.find('FeedSummary')).toBeDefined();
    expect(wrapper.find('FeedSummary').props().children).toEqual(descriptionProps);
    expect(wrapper.find('FeedDate').props().content).toEqual(contentProps);
  });

  it('should test for the button component', () => {
    const descriptionProps = 'this is a test description';
    const wrapper = shallow(<ArticlesWidgets description={descriptionProps} />);
    expect(wrapper.find('Menu')).toBeDefined();
    expect(wrapper.find('Icon')).toBeDefined();
    expect(wrapper.find('.widgetContainer')).toBeDefined();
    expect(wrapper.find('.Icons')).toBeDefined();
    expect(wrapper.find('.dates')).toBeDefined();
  });
});
