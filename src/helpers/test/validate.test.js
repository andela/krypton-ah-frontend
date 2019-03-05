import { articleValidator, validate, signInValidator } from '../validate';

describe('it should test write article validator', () => {
  it('should check if article title is empty', () => {
    const user = {
      firstname: '',
      lastname: 'testLastname',
      email: 'test@test.com',
      password: 'ABCabc123'
    };
    expect(validate(user)).toEqual({ firstname: 'Firstname field is required' });
  });
  it('should check if article title is empty', () => {
    const user = {
      firstname: 'firstname',
      lastname: '',
      email: 'test@test.com',
      password: 'ABCabc123'
    };
    expect(validate(user)).toEqual({ lastname: 'Lastname field is required' });
  });
  it('should check if article title is empty', () => {
    const user = {
      firstname: 'firstname',
      lastname: 'lastname',
      email: '',
      password: 'ABCabc123'
    };
    expect(validate(user)).toEqual({ email: 'Email field is required' });
    expect(signInValidator(user)).toEqual({ email: 'Email field is required' });
  });
  it('should check if article title is empty', () => {
    const user = {
      firstname: 'firstname',
      lastname: 'lastname',
      email: 'email.com',
      password: 'ABCabc123'
    };
    expect(validate(user)).toEqual({ email: 'Invalid Email Address' });
    expect(signInValidator(user)).toEqual({ email: 'Invalid Email Address' });
  });
  it('should check if article title is empty', () => {
    const user = {
      firstname: 'firstname',
      lastname: 'lastname',
      email: 'email@email.com',
      password: ''
    };
    expect(validate(user)).toEqual({ password: 'Password field is required' });
    expect(signInValidator(user)).toEqual({ password: 'Password field is required' });
  });
  it('should check if article title is empty', () => {
    const user = {
      firstname: 'firstname',
      lastname: 'lastname',
      email: 'email@email.com',
      password: 'abcd1234'
    };
    expect(validate(user)).toEqual({
      password: 'Password must be at least 8 characters, 1 uppercase letter, 1 number'
    });
    expect(signInValidator(user)).toEqual({
      password: 'Password must be at least 8 characters, 1 uppercase letter, 1 number'
    });
  });
  it('should check if article title is empty', () => {
    const article = {
      title: '',
      description: 'Learning React is fun',
      category: 'Technology',
      content: 'React is really fun to learn',
      tags: 'React'
    };
    expect(articleValidator(article)).toEqual({ title: 'Title field is required' });
  });
  it('should check if article description is empty', () => {
    const article = {
      title: 'Learn React',
      description: '',
      category: 'Technology',
      content: 'React is really fun to learn',
      tags: 'React'
    };
    expect(articleValidator(article)).toEqual({ description: 'Description field is required' });
  });
  it('should check if article category is empty', () => {
    const article = {
      title: 'Learn React',
      description: 'Learning React is fun',
      category: '',
      content: 'React is really fun to learn',
      tags: 'React'
    };
    expect(articleValidator(article)).toEqual({ category: 'A category must be selected' });
  });
  it('should check if article content is empty', () => {
    const article = {
      title: 'Learn React',
      description: 'Learning React is fun',
      category: 'Technology',
      content: '',
      tags: 'React'
    };
    expect(articleValidator(article)).toEqual({ content: 'Content is required' });
  });
  it('should check if article tags is empty', () => {
    const article = {
      title: 'Learn React',
      description: 'Learning React is fun',
      category: 'Technology',
      content: 'React is really fun to learn',
      tags: ''
    };
    expect(articleValidator(article)).toEqual({ tags: 'Atleast one tag must be selected' });
  });
});
