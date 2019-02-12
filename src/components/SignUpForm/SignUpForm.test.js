import React from 'react';
import { shallow, mount } from 'enzyme';
import SignUpForm from '.';

describe('SignUp Form', () => {
  test('should matches the snapshot', () => {
    const wrapper = shallow(<SignUpForm />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Simulate submit button ', () => {
    const wrapper = mount(<SignUpForm />);
    wrapper.find('form').simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(wrapper.find('form')).toBeDefined();
  });

  it('should change the state after change the input value', () => {
    const newValue = 'iolan@anla.com';
    const wrapper = mount(<SignUpForm />);
    wrapper.find('input[type="email"]').simulate('change', {
      target: {
        name: newValue
      }
    });
    wrapper.update();
    expect(wrapper.find('input[type="email"]').prop('name')).toContain('email');
    expect(wrapper.find('input[type="password"]').prop('name')).toContain('password');
  });
});
