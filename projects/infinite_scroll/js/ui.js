export const displayPosts = (posts, container) => {
  const fragment = document.createDocumentFragment();

  posts.forEach((post) => {
    const postEl = document.createElement('div');
    postEl.classList.add('post');
    postEl.innerHTML = `
    <div class="number">${post.id}</div>
    <div class="post-info">
    <h2 class="post-title">${post.title}</h2>
    <p class="post-body">${post.body}</p>
    </div>
    
    `;
    fragment.appendChild(postEl);
  });
  container.appendChild(fragment);
};
