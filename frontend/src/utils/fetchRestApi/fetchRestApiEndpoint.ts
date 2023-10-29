import { validateUrl } from "./validateUrl";

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
}

interface BaseFetchOptions {
  headers: {
    'Content-Type': string;
    Accept?: string;
  };
}

type FetchOptionsWithBody = BaseFetchOptions & {
  method: HttpMethod.POST;
  body: string;
};

type FetchOptionsWithoutBody = BaseFetchOptions & {
  method: HttpMethod.GET;
};

type FetchOptions = FetchOptionsWithBody | FetchOptionsWithoutBody;

export const fetchRestApiEndpoint = async (
  url: string,
  options: FetchOptions,
) => {
  const validatedUrl = validateUrl(url);

  const request = new Request(validatedUrl, options);

  const response = await fetch(request);

  return response;
};