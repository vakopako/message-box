const origin = window.location.origin;
const apiRoute = '/api';
const originWithApi = `${origin}${apiRoute}`;

export const endpoints = {
  messages: ({ groupId } = {}) => {
    const baseUrl = `${originWithApi}/messages`;

    if (!groupId) {
      return baseUrl;
    }

    return `${baseUrl}/${groupId}`;
  },
}