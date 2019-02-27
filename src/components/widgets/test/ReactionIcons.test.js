import React from 'react';
import { shallow } from 'enzyme';
import { ReactionIconsPage } from '../ReactionIcons';
import { props } from '../../../mockData/readArticle';
import { getTotalReactions } from '../../../actions/articleReactionsAction';

describe('Test for reaction Icons', () => {
  it('should have initial state of false and change when clicked ', () => {
    const wrapper = shallow(
      <ReactionIconsPage
        getTotalReactions={getTotalReactions}
        selectedArticleId={props.match.params.title}
      />
    );

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.state().like).toEqual(false);
  });

  it('should have initial state of false and change when clicked ', () => {
    const wrapper = shallow(
      <ReactionIconsPage
        getTotalReactions={getTotalReactions}
        selectedArticleId={props.match.params.title}
      />
    );

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.state().dislike).toEqual(false);
  });
});
