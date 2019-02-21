import { shallow } from 'enzyme';
import React from 'react';
import { SocialAuth } from '../socialAuth';

describe('Unit test for social authentication component', () => {
  let component;
  let props;
  beforeAll(() => {
    props = {
      isAuthenticated: true,
      socialLogin: jest.fn(),
      history: {
        location: {
          pathname: '/validPathname',
          search: 'validQuerryParams'
        }
      }
    };
    component = shallow(<SocialAuth {...props} />);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should check if componentDidMount is called for valid pathname', () => {
    const spy = jest.spyOn(props, 'socialLogin');
    component.setProps({
      history: {
        location: {
          pathname: '/validPath',
          search: 'validQuerryParams'
        },
      }
    });
    component.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it('should check for the Fragment component for valid pathname', () => {
    const Fragment = component.find('Fragment');
    expect(Fragment.length).toBe(1);
  });

  it('should check for the Redirect component for valid pathname', () => {
    const redirect = component.find('Redirect');
    expect(redirect.length).toBe(1);
  });

  it('should check for the Redirect component when isAuthenticated equals true', () => {
    component.setProps({
      isAuthenticated: true
    });
    const redirect = component.find('Redirect');
    expect(redirect.length).toBe(1);
  });

  it('should check for the Redirect component when isAuthenticated equals false', () => {
    component.setProps({
      isAuthenticated: false
    });
    const redirect = component.find('Redirect');
    expect(redirect.length).toBe(1);
  });
});
