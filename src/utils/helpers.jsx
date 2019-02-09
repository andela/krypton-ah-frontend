import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';


export function componentSnapshots(componentName) {
  const component = create(componentName);
  expect(component.toJSON()).toMatchSnapshot();
}

export function expectedResult(componenetName, field, value) {
  const wrapper = shallow(componenetName);
  expect(wrapper.find(field)).toHaveLength(value);
}
