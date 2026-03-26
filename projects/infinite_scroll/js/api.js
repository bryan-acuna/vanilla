export const fetchPosts = async (page) => {
  try {
    const api = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`;
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.json().status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Could not fetch posts: ' + error);
    return [];
  }
};
