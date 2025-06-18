const fs = require("node:fs");
const readLine = require("node:readline");

async function leerLineas() {
  const fileStream = fs.createReadStream("./public/logs.txt", "utf8");
  const rl = readLine.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  for await (const line of rl) {
    console.log("Linea: ", line);
  }
}

leerLineas().catch((err) => {
  console.error(err);
});
