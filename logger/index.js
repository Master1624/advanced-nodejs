function operacion() {
  setInterval(() => {
    console.log("Realizando operación...");
  }, 1000);
}

process.on("uncaughtException", (err) => {
  console.error("Error no capturado: ", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  console.error("Rechazo no capturado:", reason);
  process.exit(1);
});

const signals = ["SIGINT", "SIGTERM", "SIGUSR1", "SIGUSR2"];

signals.forEach((signal) => {
  process.on(signal, () => {
    console.log(`Recibido ${signal}`);
    process.exit(0);
  });
});

operacion();
