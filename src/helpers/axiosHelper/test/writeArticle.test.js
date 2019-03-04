import moxios from 'moxios';

import { createArticleCall } from '../writeArticle';
import { articlePayload, createArticleEndpoint, publishArticleOkResponse } from '../../../mockData/index';

describe('axios requests', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('makes axios request to the signup endpoint and get a response', async () => {
    moxios.stubRequest(createArticleEndpoint, {
      status: 201,
      response: { publishArticleOkResponse }
    });
    const response = await createArticleCall(articlePayload);
    expect(response.data.publishArticleOkResponse).toEqual(publishArticleOkResponse);
  });
});
