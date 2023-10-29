const origin = window.location.origin;
const apiRoute = '/api';
const originWithApi = `${origin}${apiRoute}`;

interface Messages {
  groupId?: string;
}

export const endpoints = {
  messages: ({ groupId }: Messages = {}): string => {
    const baseUrl = `${originWithApi}/messages`;

    if (!groupId) {
      return baseUrl;
    }

    return `${baseUrl}/${groupId}`;
  },
};