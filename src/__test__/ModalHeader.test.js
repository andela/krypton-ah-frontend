import React from 'react';
import { create } from 'react-test-renderer';
import checkPropTypes from 'check-prop-types';
import ModalHeader from '../components/ModalHeader';

function checkHeader() {
  test('it should matches the snapshot', () => {
    const component = create(<ModalHeader />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  test('Render title for Modal Header', () => {
    const expectedProps = { title: 'false' };
    const propError = checkPropTypes(ModalHeader.title, expectedProps, 'prop', ModalHeader.title);
    expect(propError).toBeUndefined();
  });
}
describe('Modal Header', () => {
  checkHeader();
});
