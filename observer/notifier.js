const EventEmitter = require("node:events");

class UserNotifier extends EventEmitter {}
class CreatePostNotifier extends EventEmitter {}

const notifier = new UserNotifier();
const postNotifier = new CreatePostNotifier();

module.exports = { notifier, postNotifier };
