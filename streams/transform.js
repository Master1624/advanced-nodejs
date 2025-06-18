const fs = require("node:fs");
const { Transform, pipeline } = require("node:stream");

const toUpperCase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

pipeline(
  fs.createReadStream("./public/logs.txt", "utf8"),
  toUpperCase,
  fs.createWriteStream("./public/logs-uppercase.txt"),
  (err) => {
    if (err) {
      console.error(err);
    }
  }
);
