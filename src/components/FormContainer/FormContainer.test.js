import React from 'react';
import { shallow } from 'enzyme';
import { ModalContent } from 'semantic-ui-react';
import FormContainer from '.';
import { componentSnapshots } from '../../utils/helpers';

function checkFormContainer() {
  test('should matches the snapshot', () => {
    componentSnapshots(<FormContainer />);
  });
}

describe('Modal Footer', () => {
  checkFormContainer();
  test('should contain children as props', () => {
    const wrapper = shallow(<FormContainer />);
    expect(wrapper.find(ModalContent).toBeDefined);
    expect(wrapper.props().children.props.className).toEqual('ahModal');
  });
});
