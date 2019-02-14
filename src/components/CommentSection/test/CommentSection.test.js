import React from 'react';
import { shallow } from 'enzyme';
import CommentSection from '../index';
import { commentsArray } from '../../../constants';

describe('CommentSection', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<CommentSection commentsArray={commentsArray} />);
    expect(wrapper).toMatchSnapshot();
  });
});
