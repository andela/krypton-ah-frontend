import React from 'react';
import { shallow } from 'enzyme';
import Login from '.';

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });
});
