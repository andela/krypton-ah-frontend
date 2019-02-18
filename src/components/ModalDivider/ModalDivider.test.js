import React from 'react';
import { shallow } from 'enzyme';
import ModalDivider from '.';

describe('SignIn Form', () => {
  test('should matches the snapshot', () => {
    const wrapper = shallow(<ModalDivider />);
    expect(wrapper).toMatchSnapshot();
  });
});
