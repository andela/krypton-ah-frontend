import React from 'react';
import { shallow } from 'enzyme';
import { ReactionIconsPage } from '../ReactionIcons';
import { props } from '../../../mockData/readArticle';
import { getTotalReactions } from '../../../actions/articleReactionsAction';

describe('Test for reaction Icons', () => {
  it('should have initial state of false and change when clicked ', () => {
    const articleReaction = jest.fn();
    const wrapper = shallow(
      <ReactionIconsPage
        getTotalReactions={getTotalReactions}
        selectedArticleId={props.match.params.title}
        totalArticleReactions={props.totalArticleReactions}
        articleReaction={articleReaction}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should have initial state of false and change when clicked ', () => {
    const articleReaction = jest.fn();
    const wrapper = shallow(
      <ReactionIconsPage
        getTotalReactions={getTotalReactions}
        selectedArticleId={props.match.params.title}
        totalArticleReactions={props.totalArticleReactions}
        articleReaction={articleReaction}
      />
    );

    expect(wrapper).toMatchSnapshot();
    wrapper.instance().createReaction();
  });
});
