import React from 'react';
import { shallow } from 'enzyme';
import MainContainer from '../MainContainer';
import PopularArticles from '../popular';
import FeaturedArticles from '../featuredArticles';
import Loader from '../../loaders/componentLoader';

describe('home container test', () => {
  it('should test for the home component', () => {
    const wrapper = shallow(<MainContainer />);
    expect(wrapper.find('Grid')).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it('should test for the popular articles component', () => {
    const wrapper = shallow(<PopularArticles />);
    expect(wrapper.find('Grid')).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it('should test for the featuredarticles component', () => {
    const wrapper = shallow(<FeaturedArticles />);
    expect(wrapper.find('Grid')).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it('should test for the featuredarticles component', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });
});
