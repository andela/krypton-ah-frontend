import React from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon,
  WhatsappIcon,
  EmailIcon } from 'react-share';
import { BASE_URL_CB } from '../../constants';
import './ShareArticle.scss';

class ShareArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { id, title, description } = this.props;
    const url = `${BASE_URL_CB}/article/${id}`;
    const hashtags = ['ah-Krypton'];
    return (
      <div className="shareArticleIcons">
        <FacebookShareButton quote={description} url={url}>
          <FacebookIcon size={25} round />
        </FacebookShareButton>
        <GooglePlusShareButton quote={description} url={url}>
          <GooglePlusIcon size={25} round />
        </GooglePlusShareButton>
        <TwitterShareButton title={title} hashtags={hashtags} url={url}>
          <TwitterIcon size={25} round />
        </TwitterShareButton>
        <LinkedinShareButton title={title} description={description} url={url}>
          <LinkedinIcon size={25} round />
        </LinkedinShareButton>
        <WhatsappShareButton title={title} url={url}>
          <WhatsappIcon size={25} round />
        </WhatsappShareButton>
        <EmailShareButton subject={title} body={description} url={url}>
          <EmailIcon size={25} round />
        </EmailShareButton>

      </div>
    );
  }
}

ShareArticle.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  description: PropTypes.string,
};

ShareArticle.defaultProps = {
  title: ' ',
  id: ' ',
  description: ' '
};

export default ShareArticle;
