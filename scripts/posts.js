let posts = {};
let users = {};

function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      posts = json;
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json1) => {
          users = json1;
          poppulatePostList();
        });
    });
}

function poppulatePostList() {
  let postList = document.getElementById("postList");

  for (let post of posts) {
    let author = users.find((x) => x.id == post.userId);
    let li = constructListItem(post, author);
    postList.appendChild(li);
  }
}

function constructListItem(post, user) {
  let li = document.createElement("li");
  li.classList.add("postsContainer");
  li.classList.add("flex");
  li.innerHTML = `
        <div class="author">${user.name}</div>
        <div class="title">${post.title}</div>
        <div class="postContent">${post.body}</div>

    `;
  return li;
}
