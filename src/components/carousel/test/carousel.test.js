import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '..';

describe('home container test', () => {
  it('should test for the home component', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper.find('Grid')).toBeDefined();
  });
});
