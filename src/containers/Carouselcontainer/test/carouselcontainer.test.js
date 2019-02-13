import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '..';

describe('carousel test', () => {
  it('should test for the carousel container', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper).toMatchSnapshot();
  });
});
