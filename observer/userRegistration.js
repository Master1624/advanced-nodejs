const { notifier } = require("./notifier");

function registerUser(user) {
  console.log("Registrando usuario");
  // register user
  notifier.emit("userRegistered", user);
  // Implementar registro

  return user;
}

module.exports = registerUser;
