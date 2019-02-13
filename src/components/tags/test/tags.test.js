import React from 'react';
import { shallow } from 'enzyme';
import Tag from '../tags';

describe('button test', () => {
  it('should test for the button component', () => {
    const wrapper = shallow(<Tag />);
    expect(wrapper).toMatchSnapshot();
  });
});
