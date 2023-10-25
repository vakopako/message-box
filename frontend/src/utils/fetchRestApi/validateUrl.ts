export const validateUrl = (url) => {

  if (!url) {
    throw new Error("URL is required");
  }

  // is URL a valid url?
  try {
    new URL(url);
  } catch (error) {
    throw new Error("URL is invalid");
  }

  return url;
}