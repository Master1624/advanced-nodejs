const { postNotifier } = require("../notifier");

function postCreated(post) {
  console.log(`Post ${post.title} created with content ${post.content}`);
}

postNotifier.on("postCreated", postCreated);

module.exports = postCreated;
