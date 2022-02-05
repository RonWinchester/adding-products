import { getResponseData, apiUrl } from "../../constants/constants";

export function getProduct() {
  return fetch(`${apiUrl}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return getResponseData(res);
  });
}

export function movieSearch(query) {
  return fetch(`${apiUrl}product`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: query,
    }),
  }).then((res) => {
    return getResponseData(res);
  });
}

export function createProduct(data) {
   const {title, description} = data
  return fetch(`${apiUrl}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        title,
        description,
        params: {
          type: data.params.type,
          brand: data.params.brand,
        }}),
  }).then((res) => {
    return getResponseData(res);
  });
}
