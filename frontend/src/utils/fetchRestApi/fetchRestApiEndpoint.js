import { validateUrl } from "./validateUrl";

export const fetchRestApiEndpoint = async (url, options) => {

  const validatedUrl = validateUrl(url);

  const request = new Request(validatedUrl, options);

  const response = await fetch(request);

  return response;
}