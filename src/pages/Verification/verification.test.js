import React from 'react';
import { shallow } from 'enzyme';
import Verification from './index';

describe('Verification Component', () => {
  let wrapper;
  beforeAll(() => {
    const props = {
      history: {
        location: {
          search: 'token'
        }
      }
    };
    wrapper = shallow(<Verification {...props} />);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should check for redirect component on the verification page', () => {
    const redirect = wrapper.find('Redirect');
    expect(redirect.length).toBe(1);
  });
});
