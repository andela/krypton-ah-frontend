import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { Image, Grid } from 'semantic-ui-react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ArticlesIcons from '../widgets/Icons';
import './carousel.scss';
import Loader from '../../containers/loaders/componentLoader';

function carousel({ featured }) {
  if (!featured.data) {
    return <Loader />;
  }
  return (
    <Grid.Column>
      <Carousel autoPlay showThumbs={false} infiniteLoop showStatus={false}>
        {featured.data.map(article => (
          <div key={article.id} className="carousel-container">
            <Image src={article.featuredImageUrl} size="massive" />
            <p className="legend text">
              <Link replace={false} to={`/article/${article.id}`}>
                <p className="title">{article.title}</p>
              </Link>
              <p className="author">
                {`${article.articleAuthor.firstname} ${article.articleAuthor.lastname}`}
              </p>
              <ArticlesIcons date={article.createdAt} />
            </p>
          </div>
        ))}
      </Carousel>
    </Grid.Column>
  );
}

export default carousel;

carousel.defaultProps = {
  featured: ''
};

carousel.propTypes = {
  featured: PropTypes.string
};
