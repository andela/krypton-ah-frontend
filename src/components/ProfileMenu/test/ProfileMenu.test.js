import React from 'react';
import { shallow } from 'enzyme';
import ProfileMenu from '..';

describe('ProfileMenu', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<ProfileMenu menuItem={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
