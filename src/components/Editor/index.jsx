import React, { Component } from 'react';
import MediumEditor from 'react-medium-editor';
import { Form, Input, Button, TextArea } from 'semantic-ui-react';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import './Editor.scss';
import placeholder from '../../asset/images/previewImage.png';
import { articleValidator } from '../../helpers/validate';
import InlineError from '../../helpers/InlineError';
import { newCategories } from '../../mockData/index';

const mediumEditorOptions = {
  toolbar: {
    buttons: [
      'bold',
      'italic',
      'quote',
      'underline',
      'anchor',
      'strikethrough',
      'subscript',
      'superscript'
    ]
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
        featuredImage: placeholder
      },
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { article } = this.state;
    const errors = articleValidator(article);
    if (errors) {
      this.setState({ errors });
    }
  }

  handleChange(event) {
    const { article } = this.state;
    const { name, value } = event.target;
    article[name] = value;
    this.setState({
      article
    });
  }

  handleEditorChange(content) {
    const { article } = this.state;
    article.content = content;
    this.setState({
      article
    });
  }

  handleSelection(event) {
    const { article } = this.state;
    const { value } = event.target.options[event.target.selectedIndex];
    article.category = value;
    this.setState({
      article
    });
  }

  handleImageUpload(event) {
    const { article } = this.state;
    const file = event.target.files[0];
    article.featuredImage = file;
    this.setState({
      article
    });
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
          maxLength="255"
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
            <img className="featuredPreviewImage" src={article.featuredImage} alt="featuredImage" />
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

  render() {
    const { article, errors } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        {this.renderTitle(article)}
        {errors.title && <InlineError text={errors.title} />}
        {this.renderDescription(article)}
        {errors.description && <InlineError text={errors.description} />}
        {this.renderCategory(article)}
        {errors.category && <InlineError text={errors.category} />}
        {this.renderContent(article)}
        {errors.content && <InlineError text={errors.content} />}
        {this.renderTags(article)}
        {errors.tags && <InlineError text={errors.tags} />}
        {this.renderFeaturedImage(article)}
        <div className="formButton">
          <Button floated="left" content="Save as Draft" basic />
          <Button floated="right" content="Publish" onClick={this.handleSubmit} basic />
        </div>
      </Form>
    );
  }
}

export default Editor;
