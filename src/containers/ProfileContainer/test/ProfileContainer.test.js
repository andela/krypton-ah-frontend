import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, StaticRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import ProfileContainer, { ProfilePageContainer } from '..';
import { profileData as profileDataMock } from '../../../mockData';
import initialState from '../../../reducers/initialState';

const { id } = profileDataMock;
const mockStore = configureStore([thunk]);

describe('Profile', () => {
  it('should match snapshot', () => {
    const store = mockStore({
      userReducer: { ...initialState.user, id, userprofile: profileDataMock }
    });
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Route path="/profile">
            <ProfileContainer userId={id} />
          </Route>
        </Router>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot', () => {
    const store = mockStore({
      userReducer: { ...initialState.user, id, userprofile: profileDataMock }
    });
    const wrapper = mount(
      <Provider store={store}>
        <StaticRouter location={{ pathname: '/profile' }} context={{}}>
          <ProfileContainer userId={id} />
        </StaticRouter>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot', () => {
    const store = mockStore({
      userReducer: { fetchIsLoading: true, updateIsLoading: true, id, userprofile: profileDataMock }
    });
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <ProfileContainer userId={id} />
        </Router>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot', () => {
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
});
