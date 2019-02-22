import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import { Image } from 'semantic-ui-react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ArticlesIcons from '../widgets/Icons';
import './carousel.scss';
import Loader from '../../containers/loaders/componentLoader';

export default function carousel(props) {
  const { title, author, featuredImage } = props;
  return (
    <Carousel autoPlay showThumbs={false} infiniteLoop showStatus={false}>
      <div>
        <Image src={featuredImage} size="massive" />
        <p className="legend text">
          <p className="title">{title}</p>
          <p className="author">{author}</p>
          <ArticlesIcons />
        </p>
      </div>
    </Carousel>
  );
}

carousel.defaultProps = {
  featured: ''
};

carousel.propTypes = {
  featured: PropTypes.string
};
