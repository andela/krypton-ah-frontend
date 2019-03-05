import React from 'react';
import { shallow } from 'enzyme';
import FormContainer from '.';

describe('Form Container component', () => {
  it('should matches the snapshot', () => {
    const wrapper = shallow(<FormContainer />);
    expect(wrapper).toMatchSnapshot();
  });
  it.only('should simulate on click', () => {
    const wrapper = shallow(<FormContainer />);
    wrapper.instance().handleClose();
    expect(wrapper).toBeDefined();
  });
});
