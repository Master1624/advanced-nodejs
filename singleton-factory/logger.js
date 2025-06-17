class Logger {
  constructor() {
    if (!Logger.instance) {
      Logger.instance = this;
    }
    this.logs = [];
    return Logger.instance;
  }
  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push(`${timestamp}: ${message}`);
    console.log(`${timestamp}: ${message}`);
  }
  getLogs() {
    return this.logs;
  }
}

module.exports = Logger;
