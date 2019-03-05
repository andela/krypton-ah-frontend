import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userActions';
import './UploadImage.scss';

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
    this.removeImage = this.removeImage.bind(this);
  }

  handleChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.props.setImage(file, reader.result);
    };
    reader.readAsDataURL(file);
  }

  removeImage() {
    this.props.removeImage();
  }

  renderIcon(imageFile) {
    if (imageFile) {
      return (
        <Icon
          className="UploadImageIcon raised"
          size="big"
          inverted
          name="trash alternate outline"
        />
      );
    }
    return <Icon className="UploadImageIcon" size="big" name="camera" />;
  }

  render() {
    const { imageFile, hidden } = this.props;
    const htmlFor = imageFile ? 'imageButton' : 'imageInput';
    const hideUploader = hidden ? 'hidden' : '';
    return (
      <div className={`uploadImageContainer ${hideUploader}`}>
        <label htmlFor={htmlFor}>{this.renderIcon(imageFile)}</label>
        <input
          onChange={this.handleChange}
          className="hidden"
          id="imageInput"
          type="file"
          name="imageInput"
          accept="image/*"
        />
        <button className="hidden" type="button" id="imageButton" onClick={this.removeImage} />
      </div>
    );
  }
}

UploadImage.defaultProps = {
  imageFile: null,
  hidden: false
};

UploadImage.propTypes = {
  setImage: PropTypes.func.isRequired,
  removeImage: PropTypes.func.isRequired,
  imageFile: PropTypes.object,
  hidden: PropTypes.bool
};

const mapStateToProps = (state) => {
  const { newProfileImage } = state.userReducer;
  if (newProfileImage) {
    return { imageFile: newProfileImage.imageFile };
  }
  return { imageFile: null };
};
const mapDispatchToProps = dispatch => ({ ...bindActionCreators(userActions, dispatch) });

export { UploadImage as UploadImageContainer };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadImage);
