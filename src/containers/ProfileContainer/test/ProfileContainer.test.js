import React from 'react';
import { Provider } from 'react-redux';
import 'jest-localstorage-mock';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import ProfileContainer, { ProfilePageContainer } from '..';
import initialState from '../../../reducers/initialState';
import { profileData as profileDataMock, jwtToken } from '../../../mockData';

const { id } = profileDataMock;

describe('Profile', () => {
  const mockStore = configureStore([thunk]);
  const initialEntries = [{ pathname: `/profile/:${id}`, key: 'testkey' }];
  afterEach(localStorage.clear);
  it('should match snapshot when current user view own profile', () => {
    localStorage.setItem('authentication', jwtToken);
    const store = mockStore({
      userReducer: { ...initialState.user, id, userprofile: profileDataMock }
    });
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialIndex={0} initialEntries={initialEntries}>
          <ProfileContainer userId={id} />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when an authenticated user view user profile', () => {
    localStorage.setItem('authentication', jwtToken);
    const store = mockStore({
      userReducer: { ...initialState.user, userId: 'id', userprofile: profileDataMock }
    });
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialIndex={0} initialEntries={initialEntries} keyLength={0}>
          <ProfileContainer userId="id" />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when an unauthenticated user view user profile', () => {
    localStorage.clear();
    const store = mockStore({
      userReducer: { ...initialState.user, userId: 'id', userprofile: profileDataMock }
    });
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialIndex={0} initialEntries={initialEntries} keyLength={0}>
          <ProfileContainer userId="id" />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when updateIsLoading is false', () => {
    function funcMock() {}
    const wrapper = shallow(
      <ProfilePageContainer
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
