import { endpoints } from "./endpoints";
import { fetchJson } from "./fetchJson";
import { postRequest } from "./postRequest";

export const get = {
  messages: (groupId) => {
    if (!groupId) {
      throw new Error("groupId is required");
    }

    const url = endpoints.messages({ groupId });

    return {
      queryKey: url,
      queryFn: () => fetchJson(url),
    }
  },
}

export const post = {
  message: (payload) => {
    return postRequest(endpoints.messages(), payload);
  },
}

