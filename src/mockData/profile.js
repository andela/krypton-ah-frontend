const profileData = {
  firstname: 'Isaiah',
  lastname: 'Afolayan',
  profileImage: '',
  bio: 'Software developer at Andela',
  id: 'd1564aa6-e81d-41ab-8469-0aa573f4a6c5',
  country: 'Nigeria',
  phonenumber: '+2348145692034',
  gender: 'male',
  username: 'Isaiah'
};

const getUserFailureResponse = {
  data: {
    success: false,
    message: 'error retieving user'
  }
};

const getUserSuccessResponse = {
  data: {
    success: true,
    message: 'users retrieved succesfully',
    data: {
      id: 'd1564aa6-e81d-41ab-8469-0aa573f4a6c5',
      email: '1skyboat1@gmail.com',
      password: '$2b$08$Q5LSk9wYgQeuxtSTGeq/0eBMclMVg1B7wE/hfWRCjsUb9YHkgx4h.',
      firstname: 'firstname',
      lastname: 'lastname',
      isverified: true,
      createdAt: '2019-02-08T09:58:13.163Z',
      updatedAt: '2019-02-08T09:58:13.163Z',
      userprofile: {
        id: 1,
        avatar: null,
        bio: 'A world-class software developer',
        UserId: 'd1564aa6-e81d-41ab-8469-0aa573f4a6c5',
        username: 'eltneg',
        phonenumber: '+2348137457862',
        country: 'Nigeria',
        gender: 'male',
        emailnotification: false,
        createdAt: '2019-02-14T16:54:58.292Z',
        updatedAt: '2019-02-18T08:41:31.199Z'
      },
      articles: [
        {
          title: 'Article title6',
          description: 'valid article description',
          isPublished: false,
          createdAt: '2019-02-14T17:53:01.904Z',
          id: 'a76d2040-7510-43d8-b58b-a32aba67ab48'
        }
      ]
    }
  }
};

export { profileData, getUserFailureResponse, getUserSuccessResponse };
