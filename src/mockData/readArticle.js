const payload = {
  articleAuthor: { firstname: 'hakeem', lastname: 'ibrahim', userprofile: null },
  authorId: '65719288-0395-445e-b587-2b98b70bdec9',
  averageRating: 3,
  content:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  createdAt: '2019-01-23T07:09:10.447Z',
  description: 'Descriptive title',
  featuredImageUrl: 'https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg',
  id: '65719288-0395-445e-b587-2b98b70bdec9',
  isPublished: true,
  numberOfReviews: null,
  readTime: 5,
  slug: 'this-is-a-post-title-l78hgybf',
  tags: [],
  title: 'This is a post title',
  updatedAt: '2019-01-23T07:09:10.447Z',
  data: {
    message: {
      id: ['id must be a valid uuid']
    },
    success: true
  }
};

const error = {
  response: {
    status: 500,
    success: false,
    data: {
      message: 'Oops! something went wrong, kindly try again'
    }
  }
};
const props = {
  match: { params: { title: '65719288-0395-445e-b587-2b98b70bdec9' } },
  totalArticleReactions: {
    successResponse: { likes: 2, dislikes: 1 }
  }
};
const retrievedArticle = {
  successResponse: {
    title: 'this is a valid articles 2',
    content: 'this is a good content wooooooooooooooooooot tooooooooooooooooooooooooot',
    createdAt: '2019-02-20T16:53:37.716Z',
    featuredImageUrl: 'https://res.cloudinary.com/ah-krypton/image/upload/v1550010452/widget.png',
    readTime: 1,
    articleAuthor: {
      firstname: 'Michael',
      lastname: 'James',
      userprofile: null
    },
    description: 'this is a valid description wooooooooot toooooooooooooooooooot',
    slug: 'this-is-a-valid-articles-2f28b7eac-52e2-4e7d-8fe8-48d650bb6d74'
  }
};
const articleId = '65719288-0395-445e-b587-2b98b70bdec9';
const invalidId = '65719288-0395-445e';
const totalReactions = {
  data: {
    success: true,
    message: 'Total number of reactions',
    data: {
      dislikes: 1,
      likes: 1
    }
  }
};
export { payload, error, articleId, invalidId, props, totalReactions, retrievedArticle };
