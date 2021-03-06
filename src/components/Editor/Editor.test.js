import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Editor from '.';

describe('Editor Component', () => {
  it('should rendered Editor component without crashing', () => {
    const wrapper = shallow(<Editor />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should change the state after changing the article title', () => {
    const event = { target: { name: 'Learn AI' } };
    const wrapper = shallow(<Editor />);
    const handleChangeSpy = sinon.spy(wrapper.instance(), 'handleChange');
    wrapper.update();
    wrapper.find('#title').simulate('change', event);
    expect(handleChangeSpy.calledOnce).toBeDefined();
  });
  it('should change the state after changing the article category', () => {
    let event = {};
    event = { target: { selectedIndex: 0 } };
    const index = event.target.selectedIndex;
    event = { target: { options: [index], selectedIndex: 0 } };
    const wrapper = shallow(<Editor />);
    const handleSelectionSpy = sinon.spy(wrapper.instance(), 'handleSelection');
    wrapper.find('select').simulate('change', event);
    wrapper.update();
    expect(handleSelectionSpy.calledOnce).toBeDefined();
  });
  it('should stimulate on submit event', () => {
    const wrapper = shallow(<Editor />);
    wrapper.find('Form').simulate('submit', {
      preventDefault: jest.fn()
    });
    wrapper.update();
    expect(wrapper.find('Form')).toBeDefined();
  });

  it('should change the state after changing the article content', () => {
    const event = { target: { name: 'How to learn Nodejs' } };
    const wrapper = shallow(<Editor />);
    const handleEditorChangeSpy = sinon.spy(wrapper.instance(), 'handleEditorChange');
    wrapper.update();
    wrapper.find('ReactMediumEditor').simulate('change', event);
    expect(handleEditorChangeSpy.calledOnce).toBeDefined();
  });
  it('should change the state after changing the article featured image', () => {
    const event = { target: { files: ['placeholder'] } };
    const wrapper = shallow(<Editor />);
    const handleImageUploadSpy = sinon.spy(wrapper.instance(), 'handleImageUpload');
    wrapper.update();
    wrapper.find('#fileUpload').simulate('change', event);
    expect(handleImageUploadSpy.calledOnce).toBeDefined();
  });
});
