const { postNotifier } = require("./notifier");

function newPost(user, post) {
  const postWithAuthor = {
    ...post,
    author: user.name,
  };

  console.log("Creating post...", postWithAuthor);
  postNotifier.emit("postCreated", postWithAuthor);
}

module.exports = newPost;
