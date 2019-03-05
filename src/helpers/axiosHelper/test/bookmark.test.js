import moxios from 'moxios';
import { createBookmark, removeBookmark } from '../bookmark';

import { bookmarkPayload, bookmarkEndpoint,
  bookmarkedResponse, removeBookmarkResponse } from '../../../mockData';

describe('axios requests', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should make axios request to create bookmark endpoint and get response', async () => {
    moxios.stubRequest(bookmarkEndpoint, {
      response: { bookmarkedResponse }
    });
    const response = await createBookmark(bookmarkPayload);
    expect(response.data.bookmarkedResponse).toEqual(bookmarkedResponse);
  });

  it('should make axios request to remove bookmark endpoint and get response', async () => {
    moxios.stubRequest(bookmarkEndpoint, {
      response: { removeBookmarkResponse }
    });
    const response = await removeBookmark(bookmarkPayload);
    expect(response.data.removeBookmarkResponse).toEqual(removeBookmarkResponse);
  });
});
