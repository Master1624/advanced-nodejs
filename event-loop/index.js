console.log("Inicio del script");

process.nextTick(() => {
  console.log("Ejecutando process nextTick microtask");
});

setTimeout(() => {
  console.log("Ejecutando setTimeout() callback");
}, 0);

setImmediate(() => {
  console.log("Ejecutando setImmediate() callback");
});

const fs = require("node:fs");

fs.readFile(__filename, "utf8", (err, data) => {
  console.log("Ejecutando I/O callback");
});

console.log("Fin del script");
