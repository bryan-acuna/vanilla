const post_container = document.querySelector('.post-container');
export const displayPosts = (posts) => {
  posts.forEach((post) => {
    const newPost = document.createElement('div');
    newPost.classList.add('post');
    newPost.innerHTML = `
    <div class="number">${post.id}</div>
    <div class="post-info">
    <h2 class="post-title">${post.title}</h2>
    <p class="post-body">${post.body}</p>
    </div>
    
    `;
    post_container.appendChild(newPost);
  });
};
