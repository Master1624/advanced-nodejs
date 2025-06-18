const fs = require("node:fs");
const readLine = require("node:readline");
const { Transform, pipeline } = require("node:stream");

const toUpperCase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(`${chunk.toString().toUpperCase()}\n`);
    callback();
  },
});

const fileStream = fs.createReadStream("./public/logs.txt", "utf8");

const rl = readLine.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

const outputFile = fs.createWriteStream("./public/logs-uppercase-tarea.txt");

pipeline(
  rl, // Lee las lineas del archivo
  toUpperCase, // Transforma el texto a mayúsculas
  outputFile, // Escribe las lineas en un nuevo archivo
  (err) => {
    if (err) {
      console.error(err);
    }
  }
);
