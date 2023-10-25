import { endpoints } from './endpoints';
import { fetchJson } from './fetchJson';
import { postRequest } from './postRequest';

export const get = {
  messages: (groupId: string | undefined) => {
    if (!groupId) {
      throw new Error('groupId is required');
    }

    const url = endpoints.messages({ groupId });

    return {
      queryKey: url,
      queryFn: () => fetchJson(url),
    };
  },
};

interface MessagePayload {
  groupId: string;
  message: string;
}

export const post = {
  message: (payload: MessagePayload) => {
    return postRequest(endpoints.messages(), payload);
  },
};
