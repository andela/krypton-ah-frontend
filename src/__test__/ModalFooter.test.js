import React from 'react';
import { create } from 'react-test-renderer';
import ModalFooter from '../components/ModalFooter';

function checkFooter() {
  test('it should matches the snapshot', () => {
    const component = create(<ModalFooter />);
    expect(component.toJSON()).toMatchSnapshot();
  });
}

describe('Modal Footer', () => {
  checkFooter();
});
