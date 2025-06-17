const { notifier, postNotifier } = require("../notifier");

function logStats(user) {
  console.log("Logging stast...", user);
}

function logNewPost(post) {
  console.log("Logging stats...", post);
}

notifier.on("userRegistered", logStats);
postNotifier.on("New post created", logNewPost);

module.exports = { logStats, logNewPost };
