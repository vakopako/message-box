import { jest } from '@jest/globals';

import { MESSAGES } from '../../../../../../backend/prisma/seedData';

export const mockedFetch = jest.fn(
  (): Promise<Response> =>
    Promise.resolve(
      new Response(
        JSON.stringify({
          payload: MESSAGES,
        })
      )
    )
);
