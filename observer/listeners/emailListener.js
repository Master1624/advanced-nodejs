const { notifier } = require("../notifier");

function sendEmail(user) {
  console.log(`Sending email to ${user.email}`);
}

notifier.on("userRegistered", sendEmail);

module.exports = sendEmail;
