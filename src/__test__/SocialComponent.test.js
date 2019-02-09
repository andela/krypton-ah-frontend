import React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import SocialComponent from '../components/SocialComponent';

describe('Modal Social', () => {
  test('it should matches the snapshot', () => {
    const component = create(<SocialComponent />); expect(component.toJSON()).toMatchSnapshot();
  });

  test('renders four <Image /> components', () => {
    const wrapper = shallow(<SocialComponent />);
    expect(wrapper.find('Image')).toHaveLength(4);
  });

  test('renders children with `.column`', () => {
    const wrapper = shallow(<SocialComponent />);
    expect(wrapper.find('.center').filter('.column')).toHaveLength(1);
  });
});
