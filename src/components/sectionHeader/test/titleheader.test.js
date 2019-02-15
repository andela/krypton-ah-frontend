import React from 'react';
import { shallow } from 'enzyme';
import Header from '..';

describe('titleHeader test', () => {
  it('should test for the titleheader component', () => {
    const headerText = 'headertext';
    const wrapper = shallow(<Header value={headerText} />);
    expect(Header).toBeDefined();
    expect(wrapper.find('Header')).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
