import React from 'react';
import { shallow } from 'enzyme';
import SignUp from '.';


describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper).toMatchSnapshot();
  });
});
