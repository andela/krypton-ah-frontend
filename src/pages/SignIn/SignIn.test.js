import React from 'react';
import { shallow } from 'enzyme';
import SignIn from '.';

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper).toMatchSnapshot();
  });
});
