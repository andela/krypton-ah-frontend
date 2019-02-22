import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import '../Homecontainer/HomeContainer.scss';
import Title from '../../components/sectionHeader';
import FeaturedWidget from '../../components/widgets/Articlewidgets/ArticlesFeedContainer';
import { trendingArticles } from '../../mockData';
import Categories from './CategoriesContainer/Categories';
import Tags from '../../components/tags';
import NewsLetter from './Newsletter';
import Advert from '../../components/widgets/Advert';
import loader from '../loaders/responsechecker';
import { fetchcategories, fetchtags } from '../../actions/fetchArticlesAction/fetchArticlesActions';

class WidgetContainer extends Component {
  componentWillMount() {
    const { fetchcategories, fetchtags } = this.props;
    fetchcategories();
    fetchtags();
  }

  render() {
    const { articles } = this.props;
    return (
      <Grid.Row columns={1}>
        <Grid.Column>
          <Title text="Trending" />
          {loader(articles.trendingArticlesResponsefailure, <FeaturedWidget
            className="featured-widget"
            articles={articles.trendingArticlesResponse.data}
          />)}
          <Title text="Tags" />
          <List className="tags" divided relaxed>
            {loader(articles.trendingArticlesResponsefailure, <Tags type="tags" />)}
          </List>
          <Title text="Categories" />
          {loader(
            articles.categoriesResponseFailure,
            <Categories category={articles.categoriesResponse} />
          )}
        </Grid.Column>
        <Advert />
        <NewsLetter />
      </Grid.Row>
    );
  }
}


const mapStateToProps = state => ({
  articles: state.articles
});

export default connect(
  mapStateToProps,
  { fetchcategories, fetchtags }
)(WidgetContainer);

WidgetContainer.defaultProps = {
  articles: [],
  fetchcategories: [],
  fetchtags: [],
};

WidgetContainer.propTypes = {
  articles: PropTypes.array,
  fetchcategories: PropTypes.func,
  fetchtags: PropTypes.string,
};
