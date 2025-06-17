const loggerFactory = require("./loggerFactory");
const logger = require("./logger");

const loggerInstance = new logger();
const loggerConsole = loggerFactory.createLogger("console");
const loggerFile = loggerFactory.createLogger("file");

loggerConsole.log("Este es un mensaje de consola");
loggerFile.log("Este es un mensaje de file");

loggerInstance.getLogs().forEach((log) => console.log(log));
