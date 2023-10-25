import { fetchRestApiEndpoint } from './fetchRestApiEndpoint';

export const fetchJson = async url => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const response = await fetchRestApiEndpoint(url, options);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  try {
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error('Response is not JSON');
  }
};
