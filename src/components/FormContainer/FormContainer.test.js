import React from 'react';
import { shallow } from 'enzyme';
import FormContainer from '.';

describe('SignIn Form', () => {
  it('should matches the snapshot', () => {
    const wrapper = shallow(<FormContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
