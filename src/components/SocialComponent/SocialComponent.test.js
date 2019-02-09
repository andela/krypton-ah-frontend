import React from 'react';
import { shallow } from 'enzyme';
import { componentSnapshots, expectedResult } from '../../utils/helpers';

import SocialComponent from '.';

function checkSocialIcons() {
  test('it should matches the snapshot', () => {
    componentSnapshots(<SocialComponent />);
  });
  test('renders four <Image /> components', () => {
    expectedResult(<SocialComponent />, 'Image', 4);
  });
  test('renders children with `.column`', () => {
    const wrapper = shallow(<SocialComponent />);
    expect(wrapper.find('.center').filter('.column')).toHaveLength(1);
  });
}

describe('Modal Social', () => {
  checkSocialIcons();
});
