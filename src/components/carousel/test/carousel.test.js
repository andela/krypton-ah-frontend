import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../index';
import { defaultprop } from '../../../mockData';

describe('carousel conatiner test', () => {
  it('should test for the carousel component', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper.find('Grid')).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it('should test for the carousel component', () => {
    const wrapper = shallow(<Carousel featured={defaultprop} />);
    expect(wrapper.find('Grid')).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
