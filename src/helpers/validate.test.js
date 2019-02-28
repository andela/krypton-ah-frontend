import { signInValidator, validate, articleValidator } from './validate';

describe('Test validator', () => {
  it('should check for valid email', () => {
    const user = {
      email: 'fakerfake.com',
      password: 'passwordA23s'
    };
    const checkUser = signInValidator(user);
    expect(checkUser.email).toEqual('Invalid Email Address');
  });

  it('should check if email field is empty', () => {
    const user = {
      email: '',
      password: 'passwordA23s'
    };
    const checkUser = signInValidator(user);
    expect(checkUser.email).toEqual('Email field is required');
  });

  it('should check if password is in right format', () => {
    const user = {
      email: 'faker@faker.com',
      password: 'passwo23s'
    };
    const checkUser = signInValidator(user);
    expect(checkUser.password).toEqual('Password must be at least 8 characters, 1 uppercase letter, 1 number');
  });
});

describe('Check signUp validation', () => {
  it('Test sign up validator', () => {
    const user = {
      firstname: 'faker',
      lastname: 'fake',
      email: 'faker@fake.com',
      password: 'passwordAS12'
    };
    const data = validate(user);
    expect(data).toMatchInlineSnapshot('Object {}');
  });

  it('should check if password is in right format', () => {
    const user = {
      firstname: 'faker',
      lastname: 'fake',
      email: 'faker@fake.com',
      password: 'passwordAS'
    };
    const checkUser = validate(user);
    expect(checkUser.password).toEqual('Password must be at least 8 characters, 1 uppercase letter, 1 number');
  });

  it('should check for valid email', () => {
    const user = {
      firstname: 'faker',
      lastname: 'fake',
      email: 'fakerfake.com',
      password: 'passwordAS'
    };
    const checkUser = validate(user);
    expect(checkUser.email).toEqual('Invalid Email Address');
  });
});

describe('Validate create article', () => {
  it('should validate article title', () => {
    const article = {
      title: '',
      description: 'This is new',
      category: 'social',
      content: 'New article foer the world',
      tags: 'Social'
    };
    const checkArticle = articleValidator(article);
    expect(checkArticle.title).toEqual('Title field is required');
  });
  it('should validate article description', () => {
    const article = {
      title: 'Title',
      description: '',
      category: 'social',
      content: 'New article foer the world',
      tags: 'Social'
    };
    const checkArticle = articleValidator(article);
    expect(checkArticle.description).toEqual('Description field is required');
  });
  it('should validate article content', () => {
    const article = {
      title: 'Title',
      description: 'Article description',
      category: 'social',
      content: '',
      tags: 'Social'
    };
    const checkArticle = articleValidator(article);
    expect(checkArticle.content).toEqual('Content is required');
  });
  it('should validate article category', () => {
    const article = {
      title: 'Title',
      description: 'Article description',
      category: '',
      content: 'new content',
      tags: 'Social'
    };
    const checkArticle = articleValidator(article);
    expect(checkArticle.category).toEqual('A category must be selected');
  });
});
