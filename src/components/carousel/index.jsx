import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { Image } from 'semantic-ui-react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ArticlesIcons from '../widgets/Icons';
import './carousel.scss';
import Loader from '../../containers/loaders/componentLoader';

function carousel(props) {
  const { featured } = props;
  if (!featured) {
    return <Loader />;
  }
  return (
    <Carousel autoPlay showThumbs={false} infiniteLoop showStatus={false}>
      {featured.data.map(article => (
        <div key={article.id} className="carousel-container">
          <Image src={article.featuredImageUrl} size="massive" />
          <p className="legend text">
            <Link replace={false} to={`/articles/${article.id}`}>
              <p className="title">{article.title}</p>
            </Link>
            <p className="author">
              {`${article.articleAuthor.firstname} ${article.articleAuthor.lastname}`}
            </p>
            <ArticlesIcons />
          </p>
        </div>
      ))}
    </Carousel>
  );
}

export default carousel;

carousel.defaultProps = {
  featured: ''
};

carousel.propTypes = {
  featured: PropTypes.string
};
