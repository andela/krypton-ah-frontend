import React from 'react';
import { shallow } from 'enzyme';
import Profile from '..';
import { profileData as profileDataMock } from '../../../mockData';

describe('Profile', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Profile profileData={profileDataMock} />);
    expect(wrapper).toMatchSnapshot();
  });
});
