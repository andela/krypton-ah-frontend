import React from 'react';
import { shallow } from 'enzyme';
import { Verification } from '..';

describe('AccountVerification Component', () => {
  let wrapper;
  let props;
  let spy;
  beforeAll(() => {
    props = {
      isAuthenticated: true,
      activate: jest.fn(),
      history: {
        location: {
          search: 'validQuerryParams'
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

  it('should check if componentDidMount is called for valid pathname', () => {
    spy = jest.spyOn(props, 'activate');
    wrapper.setProps({
      history: {
        location: {
          search: 'querryParams'
        },
      }
    });
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });
});
