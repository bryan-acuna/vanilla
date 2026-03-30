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

function throttle(cb, timer) {
  let timeout = false;
  let saveArgs = null;

  return function (...args) {
    if (timeout) {
      saveArgs = args;
      return;
    }
    timeout = true;

    cb.apply(this, args);
    setTimeout(() => {
      timeout = false;
      if (saveArgs) {
        cb.apply(this, saveArgs);
        saveArgs = null;
      }
    }, timer);
  };
}
