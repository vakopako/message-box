import { describe, it, expect } from '@jest/globals';

import { fetchJson } from '../fetchJson';
import { mockedFetch } from './utils/mockedFetch';
import { constants } from './utils/constants';
import { MESSAGES } from '../../../../../backend/prisma/seedData';

global.fetch = mockedFetch;

describe('fetchJson', () => {
  it('should return the json response', async () => {
    const response = await fetchJson(`${constants.url.originWithApi}/messages`);
    expect(response).toEqual({
      payload: MESSAGES,
    });
  });

  it('should throw an error when the response is not ok', async () => {
    mockedFetch.mockImplementationOnce(
      (): Promise<Response> =>
        Promise.resolve(
          new Response('I dont exist', {
            status: 404,
          })
        )
    );

    await expect(
      fetchJson(`${constants.url.originWithApi}/nonexisting`)
    ).rejects.toThrow('Failed to fetch');
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
      fetchJson(`${constants.url.originWithApi}/invalid`)
    ).rejects.toThrow('Response is not JSON');
  });
});
