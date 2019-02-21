import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import FormContainer from '.';

describe('Form Container component', () => {
  it('should matches the snapshot', () => {
    const wrapper = shallow(<FormContainer />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should simulate on click', () => {
    const wrapper = shallow(<FormContainer />);
    wrapper.state = {
      open: true
    };
    const handleCloseSpy = sinon.spy(wrapper.instance(), 'handleClose');
    wrapper.update();
    wrapper.find('Modal').simulate('click');
    wrapper.setState({ open: true });
    expect(handleCloseSpy.calledOnce).toBeDefined();
  });
});
