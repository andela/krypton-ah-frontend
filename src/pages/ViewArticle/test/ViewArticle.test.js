import React from 'react';
import { shallow } from 'enzyme';
import ViewArticle from '../index';
import { props } from '../../../mockData/readArticle';

describe('ViewArticle', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<ViewArticle {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
