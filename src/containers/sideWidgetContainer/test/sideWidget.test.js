import React from 'react';
import { shallow } from 'enzyme';
import { Widget } from '../index';
import Newsletter from '../Newsletter';
import Categories from '../categoriesContainer/Categories';
import { fetchcategories, fetchtags } from '../../../actions/fetchArticlesAction/fetchArticlesActions';

describe('button test', () => {
  it('should test for the sidewidget component', () => {
    const wrapper = shallow(<Widget fetchcategories={fetchcategories} fetchtags={fetchtags} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should test for the newsletter component', () => {
    const wrapper = shallow(<Newsletter />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should test for the categories component', () => {
    const wrapper = shallow(<Categories />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should test for the categories component', () => {
    const wrapper = shallow(<Categories />);
    expect(wrapper).toMatchSnapshot();
  });
});
