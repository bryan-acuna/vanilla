export const fetchPosts = async (page) => {
  const api = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`;
  const response = await fetch(api);
  const data = await response.json();
  return data;
};
