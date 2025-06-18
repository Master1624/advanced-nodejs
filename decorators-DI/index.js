class DataService {
  processData(data) {
    return data.map((item) => item * 2);
  }
}

// Decorar DataService

class DataServiceWithLogging {
  constructor(dataService, logger) {
    this.dataService = dataService;
    this.logger = logger;
  }
  processData(data) {
    this.logger.log("Iniciando procesamiento de datos");
    const result = this.dataService.processData(data);
    this.logger.log("Finalizando procesamiento");
    return result;
  }
}

class Logger {
  log(message) {
    console.log("[Logger]", message);
  }
}

const baseService = new DataService();
const logger = new Logger();
const decorateService = new DataServiceWithLogging(baseService, logger);

// Uso de servicio decorado
const inputData = [1, 2, 3, 4, 5];
const processedData = decorateService.processData(inputData);
console.log("Resultado procesado:", processedData);
