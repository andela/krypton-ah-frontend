import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import { Image } from 'semantic-ui-react';
import ArticlesIcons from '../widgets/articleswidgets/reactionWidgets';
import './carousel.scss';

export default function index(props) {
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

index.defaultProps = {
  title: 'Placeholder Article Title',
  author: 'Placeholder author name',
  featuredImage:
    'https://res.cloudinary.com/ah-krypton/image/upload/v1550007680/MainImage.png'
};

index.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  featuredImage: PropTypes.string
};
