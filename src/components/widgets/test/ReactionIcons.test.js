import React from 'react';
import { shallow } from 'enzyme';
import Icons from '../ReactionIcons';

describe('Test for reaction Icons', () => {
  it('should have initial state of false and change when clicked ', () => {
    const wrapper = shallow(<Icons />);
    const likeButton = wrapper.find('i').at(1);

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.state().like).toEqual(false);

    likeButton.simulate('click');
    expect(wrapper.state().like).toEqual(true);

    likeButton.simulate('click');
    expect(wrapper.state().like).toEqual(false);
  });

  it('should have initial state of false and change when clicked ', () => {
    const wrapper = shallow(<Icons />);
    const dislikeButton = wrapper.find('i').at(2);
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.state().dislike).toEqual(false);

    dislikeButton.simulate('click');
    expect(wrapper.state().dislike).toEqual(true);

    dislikeButton.simulate('click');
    expect(wrapper.state().dislike).toEqual(false);
  });
});
