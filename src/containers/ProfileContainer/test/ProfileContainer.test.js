import React from 'react';
import 'jest-localstorage-mock';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import ProfileContainer from '..';
import { profileData as profileDataMock, jwtToken } from '../../../mockData';

const { id } = profileDataMock;

describe('Profile', () => {
  const initialEntries = [{ pathname: `/profile/:${id}`, key: 'testkey' }];
  it('should match snapshot when current user view own profile', () => {
    localStorage.setItem('authentication', jwtToken);
    const wrapper = mount(
      <MemoryRouter initialIndex={0} initialEntries={initialEntries}>
        <ProfileContainer userId={id} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when an authenticated user view user profile', () => {
    localStorage.setItem('authentication', jwtToken);
    const wrapper = mount(
      <MemoryRouter initialIndex={0} initialEntries={initialEntries}>
        <ProfileContainer userId="id" />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when an unauthenticated user view user profile', () => {
    localStorage.clear();
    const wrapper = mount(
      <MemoryRouter initialIndex={0} initialEntries={initialEntries}>
        <ProfileContainer userId="id" />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when updateIsLoading is false', () => {
    function funcMock() {}
    const wrapper = shallow(
      <ProfileContainer
        getUser={funcMock}
        userId={id}
        profileData={profileDataMock}
        updateProfile={funcMock}
        updateIsLoading={false}
        fetchIsLoading={false}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when updateIsLoading is true', () => {
    function funcMock() {}
    const wrapper = shallow(
      <ProfileContainer
        getUser={funcMock}
        userId={id}
        profileData={profileDataMock}
        updateProfile={funcMock}
        updateIsLoading
        fetchIsLoading
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
