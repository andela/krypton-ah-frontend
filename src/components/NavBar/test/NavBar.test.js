import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '..';
import TinyBlackBar from '../TinyBlackBar';
import WhiteBar from '../WhiteNavBar';

describe('NavBar', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should set state property fixed to true', () => {
    const wrapper = shallow(<NavBar />);
    wrapper.instance().unStickTopMenu();
    wrapper.instance().stickTopMenu();
    expect(wrapper.state().fixed).toEqual(true);
  });
  it('should set state property fixed to false', () => {
    const wrapper = shallow(<NavBar />);
    wrapper.instance().unStickTopMenu();
    expect(wrapper.state().fixed).toEqual(false);
  });
});

describe('TinyBlackBar', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<TinyBlackBar />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('WhiteNavBar', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<WhiteBar />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('WhiteNavBar with props', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<WhiteBar fixed isAuthenticated avatarUrl="https://fakeAvatar.com" />);
    expect(wrapper).toMatchSnapshot();
  });
});
