import { describe, it, expect } from '@jest/globals';

import { postRequest } from '../postRequest';
import { mockedFetch } from './utils/mockedFetch';
import { constants } from './utils/constants';
import { MESSAGES } from '../../../../../backend/prisma/seedData';

global.fetch = mockedFetch;

describe('postRequest', () => {
  it('should return the json response', async () => {
    const response = await postRequest(
      `${constants.url.originWithApi}/messages`,
      {
        groupId: '1',
        message: 'Hello World',
      }
    );
    expect(response).toEqual({ payload: MESSAGES });
  });

  it('should throw an error when the response is not ok', async () => {
    mockedFetch.mockImplementationOnce(
      (): Promise<Response> =>
        Promise.resolve(
          new Response('Not Found', {
            status: 404,
          })
        )
    );

    await expect(
      postRequest(`${constants.url.originWithApi}/nonexisting`, {
        groupId: '1',
        message: 'Hello World',
      })
    ).rejects.toThrow('Failed to post');
  });

  it('should throw an error when the response is not json', async () => {
    mockedFetch.mockImplementationOnce(
      (): Promise<Response> =>
        Promise.resolve(
          new Response('Im not JSON', {
            status: 200,
          })
        )
    );

    await expect(
      postRequest(`${constants.url.originWithApi}/invalid`, {
        groupId: '1',
        message: 'Hello World',
      })
    ).rejects.toThrow();
  });
});
