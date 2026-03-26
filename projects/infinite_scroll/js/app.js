import { fetchPosts } from './api.js';
import { displayPosts } from './ui.js';

const loader = document.querySelector('.loader');
const filter = document.querySelector('.filter');
const post_container = document.querySelector('.post-container');

let page = 1;
let isLoading = true;

const loadInitialPosts = async () => {
  const posts = await fetchPosts(page);
  displayPosts(posts, post_container);
  isLoading = false;
};

const observer = new IntersectionObserver(
  async (entries) => {
    const loaderItem = entries[0];
    if (loaderItem.isIntersecting && !isLoading) {
      isLoading = true;
      ++page;
      const newPosts = await fetchPosts(page);
      displayPosts(newPosts, post_container);
      isLoading = false;
    }
  },
  { threshold: 0.1 },
);

window.addEventListener('DOMContentLoaded', async () => {
  await loadInitialPosts();
  observer.observe(loader);
  filter.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const posts = document.querySelectorAll('.post');
    posts.forEach((currentPost) => {
      console.log(currentPost);
      const title = currentPost
        .querySelector('.post-title')
        .innerText.toLowerCase();
      const body = currentPost
        .querySelector('.post-body')
        .innerText.toLowerCase();
      if (title.includes(term) || body.includes(term)) {
        currentPost.style.display = 'flex';
      } else {
        currentPost.style.display = 'none';
      }
    });
  });
});

// window.addEventListener('scroll', async () => {
//   const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
//   if (scrollTop + clientHeight >= scrollHeight - 5) {
//     loader.classList.add('show');
//     page = page + 1;
//     const newPosts = await fetchPosts(page);
//     displayPosts(newPosts, post_container);
//   }
// });
