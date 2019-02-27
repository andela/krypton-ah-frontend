import React from 'react';
import { shallow } from 'enzyme';
import Widget from '..';
import Newsletter from '../Newsletter';
import Categories from '../categoriesContainer/Categories';

describe('button test', () => {
  it('should test for the sidewidget component', () => {
    const wrapper = shallow(<Widget />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should test for the newsletter component', () => {
    const wrapper = shallow(<Newsletter />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should test for the categories component', () => {
    const wrapper = shallow(<Categories />);
    expect(wrapper).toMatchSnapshot();
  });
});
