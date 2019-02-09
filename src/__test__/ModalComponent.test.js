import React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import ModalComponent from '../components/ModalComponent';

describe('Modal Divider', () => {
  test('it should matches the snapshot', () => {
    const component = create(<ModalComponent />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  test('should renders two <input /> components', () => {
    const wrapper = shallow(<ModalComponent />);
    expect(wrapper.find('input')).toHaveLength(2);
  });

  test('should renders 1 <Checkbox /> components', () => {
    const wrapper = shallow(<ModalComponent />);
    expect(wrapper.find('Checkbox')).toHaveLength(1);
  });

  test('should renders 1 <Button /> components', () => {
    const wrapper = shallow(<ModalComponent />);
    expect(wrapper.find('Button')).toHaveLength(1);
  });
});
