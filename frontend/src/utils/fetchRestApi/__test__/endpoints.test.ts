import { describe, it, expect } from '@jest/globals';

import { endpoints } from '../endpoints';
import { constants } from './utils/constants';

describe('endpoints', () => {
  describe('messages', () => {
    it('should return the url for messages', () => {
      expect(endpoints.messages()).toEqual(
        `${constants.url.originWithApi}/messages`
      );
    });

    it('should return the url for messages with a groupId', () => {
      expect(endpoints.messages({ groupId: '123' })).toEqual(
        `${constants.url.originWithApi}/messages/123`
      );
    });
  });
});
