const pino = require("pino");
const isProduction = process.env.NODE_ENV === "production";

const developmentConfig = {
  level: "debug",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      ignore: "pid,hostname",
      translateTime: "HH:MM:ss",
      levelFirst: true,
    },
  },
};

const productionConfig = {
  level: "info",
  transport: {
    target: "pino/file",
    options: {
      destination: "app.log",
      translateTime: "yyyy-MM-dd HH:MM:ss Z",
      levelFirst: true,
    },
  },
};

const config = isProduction ? productionConfig : developmentConfig;
const logger = pino(config);

function operacion() {
  let k = 1;
  setInterval(() => {
    logger.debug({
      message: "Realizando operacion...",
      contador: k++,
    });
  }, 1000);
}

process.on("uncaughtException", (err) => {
  logger.error("Error no capturado: ", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  logger.error("Rechazo no capturado:", reason);
  process.exit(1);
});

const signals = ["SIGINT", "SIGTERM", "SIGUSR1", "SIGUSR2"];

signals.forEach((signal) => {
  process.on(signal, () => {
    logger.info(`Recibido ${signal}`);
    process.exit(0);
  });
});

operacion();
