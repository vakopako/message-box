import { describe, it, expect } from '@jest/globals';

import { fetchRestApiEndpoint } from '../fetchRestApiEndpoint';
import { mockedFetch } from './utils/mockedFetch';
import { HttpMethod } from '../fetchRestApiEndpoint';
import { MESSAGES } from '../../../../../backend/prisma/seedData';

global.fetch = mockedFetch;

describe('fetchRestApiEndpoint', () => {
  it('should return the response', async () => {
    const response = await fetchRestApiEndpoint(
      'http://localhost/api/messages',
      {
        method: HttpMethod.GET,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    expect(response?.ok).toBe(true);

    const json = await response?.json();

    expect(json).toEqual({ payload: MESSAGES });
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

    const response = await fetchRestApiEndpoint('http://localhost/api/not-ok', {
      method: HttpMethod.GET,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    await expect(response?.ok).toBe(false);
  });
});
