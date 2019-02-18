import React from 'react';
import { shallow, mount } from 'enzyme';
import SignInForm from '.';

describe('SignIn Form', () => {
  it('should matches the snapshot', () => {
    const wrapper = shallow(<SignInForm />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should change the state after change the input value', () => {
    const newValue = 'iolan@anla.com';
    const wrapper = mount(<SignInForm />);
    wrapper.find('input[type="email"]').simulate('change', {
      target: { name: newValue }
    });
    wrapper.update();
    expect(wrapper.find('input[type="email"]').prop('name')).toContain('email');
    expect(wrapper.find('input[type="password"]').prop('name')).toContain('password');
  });

  it('should simulate on submit event ', () => {
    const wrapper = mount(<SignInForm />);
    wrapper.find('form').simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(wrapper.find('form')).toBeDefined();
  });
});
