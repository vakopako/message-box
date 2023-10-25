import { fetchRestApiEndpoint } from './fetchRestApiEndpoint';

export const postRequest = async (url, payload) => {

  const body = JSON.stringify(payload);

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body,
  };

  const response = await fetchRestApiEndpoint(url, options);

  if (!response.ok) {
    throw new Error('Failed to post');
  }

  return response.json();
};
