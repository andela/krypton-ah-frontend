import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import 'jest-localstorage-mock';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import initialState from '../../../reducers/initialState';
import NavBar from '..';
import TinyBlackBar from '../TinyBlackBar';
import WhiteBar, { WhiteNavBar } from '../WhiteNavBar';
import { setToken } from '../../../helpers/jwt';

const mockStore = configureStore([thunk]);

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

describe('WhiteBar', () => {
  const store = mockStore({
    userReducer: { ...initialState.userReducer },
    authReducer: { ...initialState.authReducer }
  });
  it('should match snapshot', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter keyLength={0}>
          <WhiteBar />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('WhiteBar with valid props', () => {
  it('should match snapshot', () => {
    const store = mockStore({
      userReducer: {
        currentUser: {
          profileImage: 'https://fakeAvatar.com',
          userId: 'userId'
        }
      },
      authReducer: { isAuthenticated: true }
    });
    // const wrapper = shallow(<WhiteBar fixed isAuthenticated avatarUrl="https://fakeAvatar.com" />);
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter keyLength={0}>
          <WhiteBar />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('WhiteBar logOut method', () => {
  it('should delete the token in localStorage', () => {
    setToken('test_token');
    const wrapper = shallow(<WhiteNavBar isAuthenticated />);
    wrapper.instance().logout();
    expect(localStorage.getItem('authentication')).toBe(null);
  });
});
