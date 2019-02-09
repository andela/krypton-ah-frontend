import React from 'react';
import { create } from 'react-test-renderer';
import ModalDivider from '../components/ModalDivider';

function checkDivider() {
  test('it should matches the snapshot', () => {
    const component = create(<ModalDivider />);
    expect(component.toJSON()).toMatchSnapshot();
  });
}

describe('Modal Divider', () => {
  checkDivider();
});
