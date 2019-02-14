import React from 'react';
import { shallow } from 'enzyme';
import SocialMediaIcons from '..';

describe('SocialMediaIcons', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<SocialMediaIcons />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot', () => {
    const wrapper = shallow(<SocialMediaIcons iconSize="large" />);
    expect(wrapper).toMatchSnapshot();
  });
});
