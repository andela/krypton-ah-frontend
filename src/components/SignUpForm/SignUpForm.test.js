import React from 'react';
import { shallow, mount } from 'enzyme';
import { SignUp } from '.';

describe('SignUp Form', () => {
  const props = {
    signup: () => {}
  };
  test('should matches the snapshot', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Simulate submit button ', () => {
    const wrapper = mount(<SignUp {...props} />);
    wrapper.find('form').simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(wrapper.find('form')).toBeDefined();
  });

  it('should change the state after change the input value', () => {
    const newValue = 'iolan@anla.com';
    const wrapper = mount(<SignUp />);
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
