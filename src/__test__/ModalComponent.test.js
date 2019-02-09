import React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import SignupFormModal from '../components/SignupFormModal';

function checkModalComponent() {
  test('it should matches the snapshot', () => {
    const component = create(<SignupFormModal />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  test('should renders 1 <Button /> component', () => {
    const wrapper = shallow(<SignupFormModal />);
    expect(wrapper.find('Button')).toHaveLength(1);
  });
  test('should render without crashing', () => {
    const wrapper = shallow(<SignupFormModal />);
    expect(wrapper).toBeTruthy();
  });
}

describe('SignupFormModal Component', () => {
  checkModalComponent();
});
