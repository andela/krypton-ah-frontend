import React from 'react';
import { shallow } from 'enzyme';
import Widget from '..';

describe('button test', () => {
  it('should test for the button component', () => {
    const wrapper = shallow(<Widget />);
    expect(wrapper).toMatchSnapshot();
  });
});
