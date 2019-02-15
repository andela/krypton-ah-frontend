import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../index';

describe('carousel conatiner test', () => {
  it('should test for the carousel component', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper.find('Grid')).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
