import React from 'react';
import { shallow } from 'enzyme';
import SearchModal from '.';

describe('Search component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<SearchModal />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should change the state after change in the input value', () => {
    const newValue = 'search';
    const wrapper = shallow(<SearchModal />);
    wrapper.find('Input[type="text"]').simulate('change', {
      target: { name: newValue }
    });
    wrapper.update();
    expect(wrapper.find('Input[type="text"]').prop('name')).toContain('article');
  });

  it('should change the state after change in radio button value', () => {
    const newValue = 'search';
    const wrapper = shallow(<SearchModal />);
    wrapper.instance().handleRadioChange({}, { value: newValue });
    expect(wrapper.state().searchOption).toBe(newValue);
  });

  it('should simulate open on modal', () => {
    const wrapper = shallow(<SearchModal />);
    wrapper.instance().show();
    expect(wrapper).toBeDefined();
  });

  it('should simulate close on modal', () => {
    const wrapper = shallow(<SearchModal />);
    wrapper.instance().close();
    expect(wrapper).toBeDefined();
  });

  it('should simulate on submit event', () => {
    const wrapper = shallow(<SearchModal />);
    wrapper.find('form').simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(wrapper.find('Redirect')).toBeDefined();
  });
});
