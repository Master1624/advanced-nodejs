const fs = require("fs");
const path = require("path");
const Logger = require("./logger");

const loggerInstance = new Logger();

class ConsoleLogger {
  constructor() {
    this.logger = loggerInstance;
  }
  log(message) {
    console.log("Usando ConsoleLogger");
    console.log(`ConsoleLogger: ${message}`);
    this.logger.log(message);
  }
}

class FileLogger {
  constructor(filePath = path.join(__dirname, "../public/logs.txt")) {
    this.logger = loggerInstance;
    this.filePath = filePath;
  }
  log(message) {
    this.logger.log(message);

    const timestamp = new Date().toISOString();
    const formattedMessage = `${timestamp}: ${message}\n`;
    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, "", "utf8");
    }
    fs.appendFileSync(this.filePath, formattedMessage, "utf8");
  }
}

class LoggerFactory {
  static createLogger(type) {
    if (type === "console") {
      return new ConsoleLogger();
    } else if (type === "file") {
      return new FileLogger();
    } else {
      throw new Error("Tipo de logger no válido");
    }
  }
}

module.exports = LoggerFactory;
