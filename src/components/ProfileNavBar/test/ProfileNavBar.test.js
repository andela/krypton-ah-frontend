import React from 'react';
import { shallow } from 'enzyme';
import ProfileNavBar from '..';

describe('ProfileNavBar', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<ProfileNavBar />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot', () => {
    const wrapper = shallow(<ProfileNavBar user="owner" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot', () => {
    const wrapper = shallow(<ProfileNavBar user="authenticated" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should toggle active state', () => {
    const wrapper = shallow(<ProfileNavBar />);
    wrapper.instance().toggleMenu();
    expect(wrapper.state().active).toEqual(true);
  });
});
