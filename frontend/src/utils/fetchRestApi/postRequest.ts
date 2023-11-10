import { fetchRestApiEndpoint, HttpMethod } from './fetchRestApiEndpoint';

interface MessagePayload {
  groupId: string;
  message: string;
}

export const postRequest = async (url: string, payload: MessagePayload) => {
  const body = JSON.stringify(payload);

  const options = {
    method: HttpMethod.POST,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body,
  };

  const response = await fetchRestApiEndpoint(url, options);

  if (!response.ok) {
    throw new Error('Failed to post');
  }

  try {
    const json = response.json();
    return json;
  } catch (error) {
    throw new Error('Response is not JSON');
  }
};
