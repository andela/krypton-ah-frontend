import React from 'react';
import { shallow } from 'enzyme';
import { MainPage } from '../MainContainer';
import PopularArticles from '../popular';
import FeaturedArticles from '../featuredArticles';
import Loader from '../../loaders/componentLoader';
import {
  fetchpopular,
  fetchfeatured
} from '../../../actions/fetchArticlesAction/fetchArticlesActions';
import { defaultprop } from '../../../mockData';

describe('home container test', () => {
  it('should test for the home component', () => {
    const wrapper = shallow(<MainPage fetchpopular={fetchpopular} fetchfeatured={fetchfeatured} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should test for the popular articles component', () => {
    const wrapper = shallow(<PopularArticles popular={false} />);
    expect(wrapper.find('Grid')).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it('should test for the popular articles component', () => {
    const wrapper = shallow(<PopularArticles popular={defaultprop.data} />);
    expect(wrapper.find('Grid')).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it('should test for the featuredarticles component', () => {
    const wrapper = shallow(<FeaturedArticles articles={defaultprop} />);
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
