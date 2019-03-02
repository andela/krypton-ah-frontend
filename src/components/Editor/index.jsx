/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import MediumEditor from 'react-medium-editor';
import PropTypes from 'prop-types';
import { Form, Input, Button, TextArea } from 'semantic-ui-react';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import './Editor.scss';
import placeholder from '../../asset/images/previewImage.png';
import { articleValidator } from '../../helpers/validate';
import InlineError from '../../helpers/InlineError';
import { newCategories } from '../../mockData/index';
import { publishArticle, draftArticle } from '../../actions/writeArticleAction/writeArticleActions';
import Loading from '../Loader/Loading';
import { imageUpload } from '../../helpers/axiosHelper/writeArticle';

const mediumEditorOptions = {
  toolbar: {
    buttons: ['bold', 'italic', 'underline', 'anchor', 'strikethrough', 'subscript', 'superscript']
  },
  placeholder: { text: 'Write your article here...' }
};

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        title: '',
        description: '',
        category: '',
        content: '',
        tags: '',
        featuredImageUrl: placeholder,
        ispublished: false
      },
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleDraft = this.handleDraft.bind(this);
  }

  handleImageUpload = async (event) => {
    const { article } = this.state;
    const file = event.target.files[0];
    const response = await imageUpload(file);
    article.featuredImageUrl = response.data.secure_url.toString();
    this.setState({
      article
    });
  };

  handleDraft = (event) => {
    event.preventDefault();
    const { article } = this.state;
    const { saveAsDraft } = this.props;
    const errors = articleValidator(article);
    if (article.featuredImageUrl === placeholder) {
      article.featuredImageUrl = undefined;
    }
    if (errors) {
      this.setState({ errors });
    }
    saveAsDraft(article);
    if (!article.featuredImageUrl) {
      article.featuredImageUrl = placeholder;
    }
  };

  handleChange(event) {
    const { article } = this.state;
    const { name, value } = event.target;
    article[name] = value;
    this.setState({ article });
  }

  handleEditorChange(content) {
    const { article } = this.state;
    article.content = content;
    this.setState({ article });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { article } = this.state;
    const { publish } = this.props;
    article.ispublished = true;
    const errors = articleValidator(article);
    if (article.featuredImageUrl === placeholder) {
      article.featuredImageUrl = undefined;
    }
    if (errors) {
      this.setState({ errors });
    }
    publish(article);
    if (!article.featuredImageUrl) {
      article.featuredImageUrl = placeholder;
    }
  }

  handleSelection(event) {
    const { article } = this.state;
    const { value } = event.target.options[event.target.selectedIndex];
    article.category = value;
    this.setState({ article });
  }

  renderTitle(article) {
    return (
      <Form.Field required>
        <label htmlFor="title">Title</label>
        <Input
          className="titleInput"
          id="title"
          name="title"
          value={article.title}
          onChange={this.handleChange}
        />
      </Form.Field>
    );
  }

  renderDescription(article) {
    return (
      <Form.Field required>
        <label htmlFor="description">Description</label>
        <TextArea
          id="description"
          name="description"
          maxLength="250"
          value={article.description}
          onChange={this.handleChange}
        />
      </Form.Field>
    );
  }

  renderCategory(article) {
    return (
      <Form.Field className="categoryForm" required>
        <label className="categoryLabel" htmlFor="category">
          Category
        </label>
        <select
          id="category"
          name="category"
          value={article.category}
          onChange={this.handleSelection}
          placeholder="Select article category"
        >
          <option value="" disabled>
            Select Category
          </option>
          {newCategories.map(category => (
            <option key={category.key} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <hr className="categoryLine" />
      </Form.Field>
    );
  }

  renderContent(article) {
    return (
      <Form.Field required>
        <label htmlFor="content">Content</label>
        <MediumEditor
          id="content"
          options={mediumEditorOptions}
          text={article.content}
          onChange={this.handleEditorChange}
        />
      </Form.Field>
    );
  }

  renderTags(article) {
    return (
      <Form.Field required>
        <label htmlFor="tags">Tags</label>
        <Input id="tags" name="tags" value={article.tags} onChange={this.handleChange} />
      </Form.Field>
    );
  }

  renderFeaturedImage(article) {
    return (
      <Form.Field>
        <label htmlFor="featuredImage">Featured Image</label>
        <div className="previewImage">
          <label htmlFor="fileUpload">
            <img
              className="featuredPreviewImage"
              src={article.featuredImageUrl}
              alt="featuredImage"
            />
          </label>
          <Input
            id="fileUpload"
            type="file"
            content="Browse"
            name="featuredImage"
            onChange={this.handleImageUpload}
          />
        </div>
      </Form.Field>
    );
  }

  renderButtons() {
    return (
      <div className="formButton">
        <Button floated="left" onClick={this.handleDraft} basic>
          <span className="publishBtn">Save as Draft</span>
          {this.props.createArticle.draftIsLoading ? <Loading size="tiny" /> : null}
        </Button>
        <Button floated="right" onClick={this.handleSubmit} basic>
          <span className="publishBtn">Publish</span>
          {this.props.createArticle.articleIsLoading ? <Loading size="tiny" /> : null}
        </Button>
      </div>
    );
  }

  render() {
    const { article, errors } = this.state;
    if (this.props.createArticle.success) {
      return <Redirect to={`/article/${this.props.createArticle.data.id}`} />;
    }
    return (
      <Form>
        {this.renderTitle(article, errors)}
        {errors.title && <InlineError text={errors.title} />}
        {this.renderDescription(article, errors)}
        {errors.description && <InlineError text={errors.description} />}
        {this.renderCategory(article, errors)}
        {errors.category && <InlineError text={errors.category} />}
        {this.renderContent(article, errors)}
        {errors.content && <InlineError text={errors.content} />}
        {this.renderTags(article, errors)}
        {errors.tags && <InlineError text={errors.tags} />}
        {this.renderFeaturedImage(article)}
        {this.renderButtons()}
      </Form>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  publish: article => dispatch(publishArticle(article)),
  saveAsDraft: article => dispatch(draftArticle(article))
});

const mapStateToProps = state => ({ createArticle: state.createArticleReducer });

export { Editor as ArticleEditor };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);

Editor.propTypes = {
  saveAsDraft: PropTypes.func,
  publish: PropTypes.func,
  createArticle: PropTypes.object
};

Editor.defaultProps = { saveAsDraft: null, publish: null, createArticle: {} };
