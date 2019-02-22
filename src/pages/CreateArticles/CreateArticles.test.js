import React from 'react';
import { shallow } from 'enzyme';
import CreateArticles from '.';

describe('Create Articles', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<CreateArticles />);
    expect(wrapper).toMatchSnapshot();
  });
});
