import React from 'react';
import { shallow } from 'enzyme';
import FormInputGroup from '.';

describe('Modal FormInput', () => {
  it('it should matches the snapshot', () => {
    const wrapper = shallow(<FormInputGroup />);
    expect(wrapper).toMatchSnapshot();
  });
});
