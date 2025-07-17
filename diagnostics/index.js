const diagnostics = require("node:diagnostics_channel");

const channel = diagnostics.channel("mi-app");

function onMessage(message) {
  console.log("Mensaje recibido: ", message);
}

diagnostics.subscribe("mi-app", onMessage);

if (channel.hasSubscribers) {
  channel.publish("mi-app", "hola");
}

diagnostics.unsubscribe("mi-app", onMessage);
