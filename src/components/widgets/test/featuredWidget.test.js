import React from 'react';
import { shallow } from 'enzyme';
import Widget from '../Articlewidgets/ArticlesFeedContainer';
import Advert from '../Advert';
import Icons from '../ReactionIcons';
import Icon from '../Icons';
import { defaultprop } from '../../../mockData';

describe('widget test', () => {
  it('should test for the article feed  component', () => {
    const wrapper = shallow(<Widget articles={false} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should test for the button component', () => {
    const wrapper = shallow(<Widget articles={defaultprop.data} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should test for the button component', () => {
    const descriptionProps = 'this is a test description';
    const classNameProps = 'className';
    const wrapper = shallow(<Widget description={descriptionProps} className={classNameProps} />);
    expect(wrapper.find('Feed')).toBeDefined();
    expect(wrapper.find('featuredwidget')).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it('should test for the advert component', () => {
    const wrapper = shallow(<Advert />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should test for the Icons component', () => {
    const wrapper = shallow(<Icons />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should test for the Icons component', () => {
    const prop = { ratingIcon: true };
    const wrapper = shallow(<Icon prop={prop} />);
    expect(wrapper).toMatchSnapshot();
  });
});
