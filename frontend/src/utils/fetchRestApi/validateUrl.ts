export const validateUrl = (url: string) => {
  if (!url) {
    throw new Error('URL is required');
  }

  // is URL a valid url?
  try {
    new URL(url);
    return url;
  } catch (error) {
    throw new Error('URL is invalid');
  }
};
