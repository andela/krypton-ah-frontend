import React from 'react';
import { shallow } from 'enzyme';
import SocialComponent from '.';

describe('Modal Social', () => {
  it('it should matches the snapshot', () => {
    const wrapper = shallow(<SocialComponent />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders four <Icon /> components', () => {
    const wrapper = shallow(<SocialComponent />);
    expect(wrapper.find('Icon')).toHaveLength(4);
  });
});
