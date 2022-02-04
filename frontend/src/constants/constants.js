export const links = [
  { link: "/", name: "Товары" },
  { link: "/create", name: "Добавить товар" },
];

export function getResponseData(res) {
  return res.ok ? res.json() : Promise.reject(`${res.status}`);
}

export const apiUrl = 'http://localhost:5000/'