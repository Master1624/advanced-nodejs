require("./listeners/emailListener");
require("./listeners/postListener");
require("./listeners/statsListener");

const registerUser = require("./userRegistration");
const newPost = require("./postCreation");

const user1 = { name: "John Doe", email: "user1@example.com", id: 1 };
const user2 = { name: "Lina Doe", email: "user2@example.com", id: 2 };

const newPost1 = {
  id: 1,
  title: "My first post",
  content: "This is the content of my first post",
};

const newPost2 = {
  id: 2,
  title: "My second post",
  content: "This is the content of my second post",
};

registerUser(user1);
registerUser(user2);

newPost(user1, newPost1);
newPost(user2, newPost2);
