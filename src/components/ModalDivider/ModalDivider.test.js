import React from 'react';
import { shallow } from 'enzyme';
import { componentSnapshots } from '../../utils/helpers';
import ModalDivider from '.';

function checkDivider() {
  test('it should matches the snapshot', () => {
    componentSnapshots(<ModalDivider />);
  });
}

describe('Modal Divider', () => {
  checkDivider();

  test('should contain props', () => {
    const text = 'sign in';
    const wrapper = shallow(<ModalDivider text={text} />);
    expect(ModalDivider).toBeDefined();
    expect(wrapper.props().children.props.children).toEqual('sign in');
  });
});
