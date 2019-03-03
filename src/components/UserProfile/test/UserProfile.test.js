import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import UserProfile from '..';

describe('UserProfile', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<UserProfile profileData={{ firstname: 'Fistname' }} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot', () => {
    const wrapper = shallow(<UserProfile profileData={{ firstname: 'Fistname' }} user="owner" />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('UserProfile', () => {
  const event = {
      target: {
        name: 'firstname',
        value: 'Firstname'
      },
      preventDefault: () => {}
    },
    data = { name: 'gender', value: 'male' };
  describe('handleChange', () => {
    it('should set state property', () => {
      const wrapper = shallow(<UserProfile profileData={{ firstname: 'Fistname' }} />);
      wrapper.instance().handleChange(event);
      expect(wrapper.state().firstname).toEqual('Firstname');
    });
  });

  describe('handleSelect', () => {
    it('should set state property', () => {
      const wrapper = shallow(<UserProfile profileData={{ firstname: 'Fistname' }} />);
      wrapper.instance().handleSelect(event, data);
      expect(wrapper.state().gender).toEqual('male');
    });
  });

  describe('handleSelect', () => {
    it('should set state property', () => {
      const wrapper = shallow(<UserProfile profileData={{ firstname: 'Fistname' }} />);
      wrapper.instance().handleSelect(event, data);
      expect(wrapper.state().gender).toEqual('male');
    });
  });

  describe('handleSubmit', () => {
    it('should call updateUser', () => {
      const updateUserMock = jest.fn();
      const wrapper = shallow(
        <UserProfile updateUser={updateUserMock} profileData={{ firstname: 'Fistname' }} />
      );
      wrapper.setState({ firstname: 'newFirstName' });
      wrapper.instance().handleSubmit(event);
      expect(updateUserMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('componentWillReceiveProps', () => {
    afterEach(sinon.restore);
    it('should call setState method in componentWillReceiveProps', () => {
      const setStateStub = sinon.stub(UserProfile.prototype, 'setState');
      const updateUserMock = jest.fn();
      const wrapper = shallow(
        <UserProfile updateUser={updateUserMock} profileData={{ firstname: 'Fistname' }} />
      );
      setStateStub.reset();
      const profileData = { lastname: 'Lastname' };
      wrapper.setProps({ profileData });
      expect(setStateStub.calledOnceWithExactly(profileData)).toBe(true);
    });
  });
});
