const fs = require("node:fs");

const data = fs.createReadStream("./public/logs.txt", "utf8");

data.on("data", (chunk) => {
  console.log(chunk.toString());
});

data.on("end", () => {
  console.log('Fin del archivo');
});
