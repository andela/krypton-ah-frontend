import React from 'react';
import { shallow } from 'enzyme';
import Tag from '../index';
import { categories } from '../../../mockData';

describe('button test', () => {
  it('should test for the button component', () => {
    const wrapper = shallow(<Tag />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should test for the button component', () => {
    const wrapper = shallow(<Tag tags={categories} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should test for the button component', () => {
    const wrapper = shallow(<Tag tags={categories} type />);
    expect(wrapper).toMatchSnapshot();
  });
});
