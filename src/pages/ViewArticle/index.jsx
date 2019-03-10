import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReadArticle from '../../components/ReadArticle';
import Widgets from '../../components/widgets/Icons';
import './ViewArticle.scss';
import '../../components/widgets/Articlewidgets/widget.scss';
import { getUserIdFromLocalStorage } from '../../helpers/jwt';
import { getUserArticleRating } from '../../actions/articleRatingActions';

class ViewArticle extends Component {
  isLoggedIn = () => {
    const userId = getUserIdFromLocalStorage();
    if (userId) {
      return false;
    }
    return true;
  }

  componentWillMount() {
    const { title } = this.props.match.params;
    const userId = getUserIdFromLocalStorage();
    if (userId) {
      this.props.getUserArticleRating(title);
    }
  }

  render() {
    const isLoggedIn = this.isLoggedIn();
    const user = getUserIdFromLocalStorage();
    const { title } = this.props.match.params;
    const rating = this.props.userRating.successResponse;
    return (
      <Fragment>
        <ReadArticle selectedArticle={title} />
        <div className=" articleReactions">
          {rating.data ? (
            <Widgets
              disabled={isLoggedIn}
              name={false}
              selectedArticleId={title}
              rating={rating.data.rating || 0}
              ratingIcon={false}
              user={user}
            />
          ) : (
            <Widgets
                disabled={isLoggedIn}
                name={false}
                selectedArticleId={title}
                rating={0}
                ratingIcon={false}
                user={user} />
          )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  article: state.readArticle.successResponse,
  userRating: state.getRating
});

export default connect(mapStateToProps, { getUserArticleRating })(ViewArticle);

ViewArticle.propTypes = {
  match: PropTypes.object.isRequired,
  params: PropTypes.object
};

ViewArticle.defaultProps = {
  params: {}
};
